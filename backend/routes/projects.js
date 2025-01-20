const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET all projects
router.get("/", async (req, res) => {
    try {
      const projects = await Project.find();
      console.log("Fetched Projects:", projects); // Log volledige projecten
      res.json(projects);
    } catch (err) {
      console.error("Error fetching projects:", err);
      res.status(500).json({ error: "Er is een fout opgetreden." });
    }
  });
  

// CREATE a new project
router.post("/", async (req, res) => {
    const {
      title = "",
      description = "",
      category = "",
      opdrachtgever = "Niet gespecificeerd",
      eindklant = "Niet gespecificeerd",
      technologies = [],
      image = "",
      details = "",
      liveLink = "",
      githubLink = "",
    } = req.body;
  
    console.log("POST Data:", {
      title,
      description,
      category,
      opdrachtgever,
      eindklant,
      technologies,
      image,
      details,
      liveLink,
      githubLink,
    }); // Debugging
  
    try {
      const newProject = new Project({
        title,
        description,
        category,
        opdrachtgever,
        eindklant,
        technologies,
        image,
        details,
        liveLink,
        githubLink,
      });
      const savedProject = await newProject.save();
      console.log("Saved Project:", savedProject); // Debugging
      res.status(201).json(savedProject);
    } catch (err) {
      console.error("Error saving project:", err);
      res.status(500).json({ error: "Er is een fout opgetreden bij het toevoegen." });
    }
  });
  

// UPDATE a project by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ error: "Er is een fout opgetreden bij het updaten." });
  }
});

// DELETE a project by ID
router.delete("/:id", async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Project succesvol verwijderd." });
  } catch (err) {
    res.status(500).json({ error: "Er is een fout opgetreden." });
  }
});

module.exports = router;
