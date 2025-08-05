const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true }, // Trim voor betere validatie
    description: { type: String, required: true, trim: true },
    details: { type: String, trim: true },
    benefits: { type: [String], default: [] }, // Standaard lege array
  },
  {
    timestamps: true, // Automatisch `createdAt` en `updatedAt` toevoegen
  }
);

module.exports = mongoose.model("Service", serviceSchema);
