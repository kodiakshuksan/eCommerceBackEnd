// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// // category belongToMany products (through category_id)
// Category.belongsToMany(Product, {
//   // Define the table needed to store the foreign keys
//   through: {
//     model: category_id,
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'viewCategories_withProductCategoryIds'
// });

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'productWithTags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'view_tagsThatHaveProducts'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
