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

  // GET a single project by ID
router.get("/:id", async (req, res) => {
    try {
      const project = await Project.findById(req.params.id);
      if (!project) {
        return res.status(404).json({ error: "Project niet gevonden." });
      }
      res.json(project);
    } catch (err) {
      console.error("Error fetching project by ID:", err);
      res.status(500).json({ error: "Er is een fout opgetreden." });
    }
  });
  

// CREATE a new project
router.post("/", async (req, res) => {
  const {
    title,
    description,
    details,
    image,
    category,
    technologies,
    liveLink,
    githubLink,
    opdrachtgever,
    eindklant,
  } = req.body;

  try {
    const newProject = new Project({
      title,
      description,
      details,
      image,
      category,
      technologies,
      liveLink,
      githubLink,
      opdrachtgever, // Toegevoegd
      eindklant,     // Toegevoegd
    });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(500).json({ error: "Er is een fout opgetreden bij het toevoegen." });
  }
});
// UPDATE a project by ID
router.put("/:id", async (req, res) => {
    try {
      const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedProject) {
        return res.status(404).json({ error: "Project niet gevonden." });
      }
      res.json(updatedProject);
    } catch (err) {
      res.status(500).json({ error: "Er is een fout opgetreden bij het updaten." });
    }
  });
  
  // DELETE a project by ID
  router.delete("/:id", async (req, res) => {
    try {
      const deletedProject = await Project.findByIdAndDelete(req.params.id);
      if (!deletedProject) {
        return res.status(404).json({ error: "Project niet gevonden." });
      }
      res.status(200).json({ message: "Project succesvol verwijderd." });
    } catch (err) {
      res.status(500).json({ error: "Er is een fout opgetreden." });
    }
  });
  
  module.exports = router;
