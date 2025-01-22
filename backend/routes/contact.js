const express = require("express");
const nodemailer = require("nodemailer");
const fetch = require("node-fetch");
const Contact = require("../models/Contact"); // Importeer het contactmodel
const router = express.Router();

// Contact formulier endpoint
router.post("/", async (req, res) => {
  const { name, email, message, services, "g-recaptcha-response": recaptchaToken } = req.body;

  // Controleer op lege velden
  if (!name || !email || !message || !services || !recaptchaToken) {
    return res.status(400).json({ error: "Alle velden en reCAPTCHA zijn verplicht." });
  }

  try {
    // Valideer de reCAPTCHA token
    const recaptchaSecret = process.env.RECAPTCHA_SECRET;
    const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
    });

    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success) {
      return res.status(400).json({ error: "reCAPTCHA validatie mislukt. Probeer opnieuw." });
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
