const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  details: { type: String },
  image: { type: String },
  category: { type: String },
  technologies: [String],
  opdrachtgever: { type: String, default: "Niet gespecificeerd" },
  eindklant: { type: String, default: "Niet gespecificeerd" },
  liveLink: { type: String },
  githubLink: { type: String },
});

module.exports = mongoose.model("Project", ProjectSchema);
