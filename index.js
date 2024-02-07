const express = require("express");

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const app = express();

const db = require("./db/models/index");

const { reddit_top_posts } = db;

// import controller file area
const RedditController = require("./controllers/redditController.js");

// put db stuff in controller section
const redditController = new RedditController(reddit_top_posts);

// import router section
const RedditRouter = require("./routers/redditRouter");

// assign controller to router area
const redditRouter = new RedditRouter(redditController);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// assign routes
app.use("/reddit", redditRouter.routes());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
