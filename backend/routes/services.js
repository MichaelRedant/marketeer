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
    // Haal services en totaal aantal op
    const services = await Service.find();
    const totalCount = await Service.countDocuments();

    // Formatteer de data
    const formattedServices = services.map((service) => ({
      id: service._id.toString(), // Gebruik MongoDB ObjectID als string
      name: service.name,
      description: service.description,
      details: service.details,
      benefits: service.benefits,
    }));

    // Debugging logs
    console.log("Formatted Services:", JSON.stringify(formattedServices, null, 2));

    // Headers instellen voor pagination
    res.set("Content-Range", `services 0-${services.length - 1}/${totalCount}`);
    res.set("Access-Control-Expose-Headers", "Content-Range");

    // Stuur de juiste response
    res.status(200).json({ data: formattedServices, total: totalCount }); // Voor frontend-consistentie
  } catch (error) {
    console.error("Error in GET /api/services:", error);
    res.status(500).json({ error: "Er is een fout opgetreden bij het ophalen van de diensten." });
  }
});

// CREATE a new service
router.post("/", async (req, res) => {
  const { name, description, details, benefits } = req.body;

  try {
    // Maak een nieuwe service aan en sla op
    const newService = new Service({ name, description, details, benefits });
    const savedService = await newService.save();

    console.log("Created Service:", savedService);

    // Response met de nieuwe service
    res.status(201).json({
      data: {
        id: savedService._id.toString(), // Gebruik MongoDB ObjectID als string
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
    // Update een bestaande service
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id, // Gebruik ObjectID voor zoeken
      req.body,
      { new: true } // Retourneer de geüpdatete service
    );

    if (!updatedService) {
      return res.status(404).json({ error: "Service niet gevonden." });
    }

    console.log("Updated Service:", updatedService);

    // Response met de geüpdatete service
    res.json({
      data: {
        id: updatedService._id.toString(),
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
    // Verwijder de service met de gegeven ID
    const deletedService = await Service.findByIdAndDelete(req.params.id);

    if (!deletedService) {
      return res.status(404).json({ error: "Service niet gevonden." });
    }

    console.log("Deleted Service:", deletedService);

    res.status(200).json({ message: "Dienst succesvol verwijderd." });
  } catch (err) {
    console.error("Error in DELETE /:id:", err);
    res.status(500).json({ error: "Er is een fout opgetreden." });
  }
});

module.exports = router;
