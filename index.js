import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import _ from "lodash";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const blogPosts = [];

app.get("/", (req, res) => {
  res.render("index.ejs", {
    blog: blogPosts,
  });
});

app.post("/compose", (req, res) => {
  const blogPost = {
    title: req.body["postTitle"],
    year: req.body["postYear"],
    content: req.body["postProper"],
  };
  blogPosts.push(blogPost);
  res.redirect("/");
});

app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});

app.get("/blogpost1", (req, res) => {
  res.sendFile(__dirname + "/public/blog posts/robsheffield.html");
});

app.get("/blogpost2", (req, res) => {
  res.sendFile(__dirname + "/public/blog posts/keithharris.html");
});

app.get("/blogpost3", (req, res) => {
  res.sendFile(__dirname + "/public/blog posts/rjsmith.html");
});

app.get("/blogpost4", (req, res) => {
  res.sendFile(__dirname + "/public/blog posts/karendurbin.html");
});

app.get("/blogpost5", (req, res) => {
  res.sendFile(__dirname + "/public/blog posts/lesterbangs1.html");
});

app.get("/blogpost6", (req, res) => {
  res.sendFile(__dirname + "/public/blog posts/lesterbangs2.html");
});

app.get("/posts/:page", (req, res) => {
  const reqTitle = _.lowerCase(req.params.page);
  blogPosts.forEach((post) => {
    const actTitle = _.lowerCase(post.title);
    if (reqTitle === actTitle) {
      res.render("post.ejs", {
        title: post.title,
        year: post.year,
        content: post.content,
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
