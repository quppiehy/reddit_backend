const express = require("express");
const router = express.Router();

class RedditRouter {
  constructor(controller) {
    this.controller = controller;
  }

  routes() {
    if (!this.controller) {
      throw new Error("Controller is not defined in RedditRouter");
    }
    router.get("/", this.controller.crawlReddit.bind(this.controller));

    return router;
  }
}
module.exports = RedditRouter;
