"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class reddit_top_posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reddit_top_posts.init(
    {
      title: DataTypes.STRING,
      date: DataTypes.DATE,
      author: DataTypes.STRING,
      ups: DataTypes.INTEGER,
      thumbnail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "reddit_top_posts",
      underscored: true,
    }
  );
  return reddit_top_posts;
};
