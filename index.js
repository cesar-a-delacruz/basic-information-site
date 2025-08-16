import express from "express";
import path from "path";

const app = express();

app.listen(8080, (error) => {
  if (error) throw error;
  console.log("running...");
});

const options = { root: path.dirname(".") };

app.get("/", (req, res) => {
  res.status(200).sendFile("./index.html", options);
});
app.get("/about", (req, res) => {
  res.status(200).sendFile("./about.html", options);
});
app.get("/contact-me", (req, res) => {
  res.status(200).sendFile("./contact-me.html", options);
});

app.use((req, res) => {
  res.status(404).sendFile("./404.html", options);
});

