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

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Alle velden zijn verplicht." });
  }

  try {
    const newMessage = new Message({ name, email, message, services });
    await newMessage.save();
    res.status(201).json({ message: "Bericht opgeslagen!" });
  } catch (err) {
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
