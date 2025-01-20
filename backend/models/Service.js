const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose); // Voor auto-increment

const serviceSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true }, // Automatisch geïncrementeerd veld
    name: { type: String, required: true, trim: true }, // Trim voor betere validatie
    description: { type: String, required: true, trim: true },
    details: { type: String, trim: true },
    benefits: { type: [String], default: [] }, // Standaard lege array
  },
  {
    timestamps: true, // Automatisch `createdAt` en `updatedAt` toevoegen
  }
);

// Voeg auto-increment toe aan het `id` veld
serviceSchema.plugin(AutoIncrement, { inc_field: "id" });

// Exporteer het model
module.exports = mongoose.model("Service", serviceSchema);
