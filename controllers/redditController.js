const axios = require("axios");
const { reddit_top_posts } = require("../db/models");

class RedditController {
  constructor(redditModel) {
    this.redditModel = redditModel;
  }

  async crawlReddit(req, res) {
    try {
      const response = await axios.get(
        "https://www.reddit.com/r/memes/top.json?t=day&limit=20"
      );
      const posts = response.data.data.children
        .map((post) => {
          const { title, created_utc, author, thumbnail, ups } = post.data;
          const date = new Date(created_utc * 1000);
          return { title, date, author, thumbnail, ups };
        })
        .sort((a, b) => b.ups - a.ups);

      console.log(posts);

      await reddit_top_posts.bulkCreate(posts);

      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = RedditController;
