const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin: "*", // Of een specifieke URL zoals "http://localhost:3000"
    exposedHeaders: ["Content-Range"],
  };
  
  app.use(cors(corsOptions));
  
  
// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.get("/", (req, res) => {
    res.send("Backend draait correct! 🚀");
  });
  
app.use("/api/projects", require("./routes/projects"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/messages", require("./routes/messages"));
app.use("/api/services-admin", require("./routes/services"));



// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
