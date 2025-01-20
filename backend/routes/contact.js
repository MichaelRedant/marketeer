const express = require("express");
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact"); // Importeer het contactmodel
const router = express.Router();

// Contact formulier endpoint
router.post("/", async (req, res) => {
  const { name, email, message, services } = req.body;

  if (!name || !email || !message || !services) {
    return res.status(400).json({ error: "Alle velden zijn verplicht." });
  }

  // Nodemailer configuratie
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Schakel SSL-verificatie uit
    },
  });
  
  
  

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Nieuw bericht van ${name}`,
    text: `
      Naam: ${name}
      E-mail: ${email}
      Bericht: ${message}
      Geselecteerde diensten: ${services.join(", ")}
    `,
  };

  try {
    // Opslaan in MongoDB
    const newContact = new Contact({ name, email, message, services });
    await newContact.save();

    // Verstuur e-mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Bericht succesvol verzonden en opgeslagen!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Er is een fout opgetreden bij het verzenden of opslaan." });
  }
});

module.exports = router;
