const express = require("express");
const path = require("path");
const app = express();

// Define the directory where your static files are located
const staticDir = path.join(__dirname, "dist");

// Define the port to listen on
const PORT = process.env.PORT || 5000;

// Serve static files from the 'dist' directory
app.use(express.static(staticDir));

// Serve the index.html file for any other route
app.get("*", (req, res) => {
  res.sendFile(path.join(staticDir, "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
