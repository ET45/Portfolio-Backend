"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      character.belongsTo(models.user);
      character.belongsTo(models.location);
      // define association here
    }
  }
  character.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      link: DataTypes.STRING,
      description: DataTypes.STRING,
      class: DataTypes.STRING,
      skill: DataTypes.STRING,
      gender: DataTypes.STRING,
      hometown: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "character",
    }
  );
  return character;
};
