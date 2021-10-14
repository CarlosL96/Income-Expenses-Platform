const app = require("express")();
const http = require("http").Server(app);
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const apiV1 = require("./apiV1");
const express = require("express");
const path = require("path");
dotenv.config();

//  -   -   -   -   -   -   -   -   C O N E X I Ó N   D E L   A P I -   -   -   -   -   -   -

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(process.cwd(), "build")));

const PORT = process.env.PORT || 50034;

http.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
// ---------------------------------------BUILD---------//////
console.log("Creating connection");

app.use("/api/login", apiV1.Login);

app.use("*", (req, res) => {
  res.status(404).send("INCOMEAPP - ERROR 404 - NOT FOUND")
});
/* app.use("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "build", "index.html"));
}); */
