const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Er is een fout opgetreden." });
  }
});

// CREATE a new project
router.post("/", async (req, res) => {
  const { title, description, category } = req.body;

  try {
    const newProject = new Project({ title, description, category });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(500).json({ error: "Er is een fout opgetreden bij het toevoegen." });
  }
});

// UPDATE a project by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
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
