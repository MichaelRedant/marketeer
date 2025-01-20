const express = require("express");
const Message = require("../models/Message");
const router = express.Router();

// Haal alle berichten op
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Kan berichten niet ophalen" });
  }
});

// Voeg een bericht toe
router.post("/", async (req, res) => {
  const { name, email, message, services } = req.body;

  console.log("Incoming data:", req.body); // Debug log

  if (!name || !email || !message) {
    console.log("Validation failed: Missing fields"); // Debug log
    return res.status(400).json({ error: "Alle velden zijn verplicht." });
  }

  try {
    const newMessage = new Message({ name, email, message, services });
    const savedMessage = await newMessage.save();

    console.log("Saved message:", savedMessage); // Debug log
    res.status(201).json({ message: "Bericht opgeslagen!" });
  } catch (err) {
    console.error("Error saving message to MongoDB:", err); // Debug log
    res.status(500).json({ error: "Kan het bericht niet opslaan" });
  }
});



// Verwijder een bericht
router.delete("/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) return res.status(404).json({ error: "Bericht niet gevonden" });

    await message.remove();
    res.json({ message: "Bericht verwijderd!" });
  } catch (err) {
    res.status(500).json({ error: "Kan het bericht niet verwijderen" });
  }
});

module.exports = router;
