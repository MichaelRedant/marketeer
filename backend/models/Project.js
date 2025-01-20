const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  details: { type: String },
  image: { type: String },
  category: { type: String },
  technologies: [String],
  liveLink: { type: String },
  githubLink: { type: String },
  opdrachtgever: { type: String }, 
  eindklant: { type: String },
});

module.exports = mongoose.model("Project", ProjectSchema);
