import express from "express";
import path from "path";

const app = express();

app.set("views", path.join(path.dirname('.'), "views"));
app.set("view engine", "ejs");

app.listen(8080, (error) => {
  if (error) throw error;
  console.log("running...");
});

app.get("/", (req, res) => {
  res.status(200).render("index", { title: "Home - My Info Site" });
});
app.get("/about", (req, res) => {
  res.status(200).render("about", { title: "About Me" });
});
app.get("/contact-me", (req, res) => {
  res.status(200).render("contact-me", { title: "Contact Me - My Info Site" });
});

app.use((req, res) => {
  res.status(404).render("contact-me", { title: "404 - Page Not Found" });
});
