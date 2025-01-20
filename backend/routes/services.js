const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

// Logging middleware
router.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  console.log("Body:", req.body);
  console.log("Query Params:", req.query);
  next();
});

// GET all services
router.get("/", async (req, res) => {
    try {
      // Haal services op
      const services = await Service.find();
      const totalCount = await Service.countDocuments();
  
      // Formatteer de data
      const formattedServices = services.map((service) => ({
        id: service.id, // Numerieke ID
        name: service.name,
        description: service.description,
        details: service.details,
        benefits: service.benefits,
      }));
  
      // Debugging
      console.log("Formatted Services:", JSON.stringify(formattedServices, null, 2));
  
      // Headers instellen
      res.set("Content-Range", `services 0-${services.length - 1}/${totalCount}`);
      res.set("Access-Control-Expose-Headers", "Content-Range");
  
      // Stuur respons
      res.status(200).json({
        data: formattedServices,
        total: totalCount,
      });
    } catch (error) {
      console.error("Error in GET /api/services-admin:", error);
      res.status(500).json({ error: "Er is een fout opgetreden bij het ophalen van de diensten." });
    }
  });
  
  

// CREATE a new service
router.post("/", async (req, res) => {
  const { name, description, details, benefits } = req.body;

  try {
    const newService = new Service({ name, description, details, benefits });
    const savedService = await newService.save();

    console.log("Created Service:", savedService);

    res.status(201).json({
      data: {
        id: savedService.id, // Gebruik het numerieke id
        name: savedService.name,
        description: savedService.description,
        details: savedService.details,
        benefits: savedService.benefits,
      },
    });
  } catch (err) {
    console.error("Error during service creation:", err);
    res.status(500).json({ error: "Er is een fout opgetreden bij het toevoegen van de dienst." });
  }
});

// UPDATE a service by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedService = await Service.findOneAndUpdate(
      { id: req.params.id }, // Zoek op numerieke id
      req.body,
      { new: true }
    );

    console.log("Updated Service:", updatedService);

    res.json({
      data: {
        id: updatedService.id,
        name: updatedService.name,
        description: updatedService.description,
        details: updatedService.details,
        benefits: updatedService.benefits,
      },
    });
  } catch (err) {
    console.error("Error in PUT /:id:", err);
    res.status(500).json({ error: "Er is een fout opgetreden bij het updaten." });
  }
});

// DELETE a service by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedService = await Service.findOneAndDelete({ id: req.params.id }); // Zoek op numerieke id
    console.log("Deleted Service:", deletedService);
    res.status(200).json({ message: "Dienst succesvol verwijderd." });
  } catch (err) {
    console.error("Error in DELETE /:id:", err);
    res.status(500).json({ error: "Er is een fout opgetreden." });
  }
});

module.exports = router;
