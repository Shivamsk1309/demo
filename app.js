const express = require("express");
const path = require("path");
const app = express();
const port = process.env.port || 8000;

//app.use(express.static('static', options))

// express specific stuff
// app.use("/", express.static("/")); // For serving static files
// app.use(express.urlencoded());

// PUG SPECIFIC STUFF
// app.set("view engine", "pug"); // Set the template engine as pug
// app.set("/", path.join(__dirname, "views")); // Set the views directory

// ENDPOINTS

app.get("/", (req, res) => {
  res.send("hello");
});
// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});
