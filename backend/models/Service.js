const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose); // Voor auto-increment

const serviceSchema = new mongoose.Schema({
  id: { type: Number, unique: true }, // Auto-increment veld
  name: { type: String, required: true },
  description: { type: String, required: true },
  details: { type: String },
  benefits: { type: [String] },
});

// Voeg auto-increment toe
serviceSchema.plugin(AutoIncrement, { inc_field: "id" });

module.exports = mongoose.model("Service", serviceSchema);
