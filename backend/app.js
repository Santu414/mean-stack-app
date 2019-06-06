const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "This is Post Request"
  });
});

app.get("/api/posts", (req, res, next) => {
  posts = [
    {
      id: "fsfdgsf121",
      title: "First Title",
      content: "This is first content"
    },
    {
      id: "fsfdgsf131",
      title: "second Title",
      content: "This is second content"
    },
    {
      id: "fsfdgsf141",
      title: "third Title",
      content: "This is third content"
    }
  ];
  res.json({
    message: "This is Post request",
    posts: posts
  });
});

module.exports = app;
