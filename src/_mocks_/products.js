import categories from "./categories";

const listCategory = categories;

function feedProduct(listCategory, length = 6) {
  let listProduct = [];
  for (let category of listCategory) {
    for (let index = 1; index <= length; index++) {
      let product = {
        id: category.name.toLowerCase() + "_" + index,
        category_id: category.id,
        name: category.name + " " + index,
        description: "This is description",
        quantity: 10,
        price: 1000,
        image:
          "/images/products/" +
          category.name.toLowerCase() +
          "_" +
          index +
          ".jpg",
      };
      listProduct.push(product);
    }
  }
  return listProduct;
}
const products = feedProduct(listCategory);

export default products;
