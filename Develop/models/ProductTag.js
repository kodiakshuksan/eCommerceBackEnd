const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  {
    // define columns
    productTag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        //  References the `Product` model's `id`.
        model: 'Product',
        key: 'product_id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        // References the `Tag` model's `id`.
        model: 'Tag',
        key: 'tag_id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
