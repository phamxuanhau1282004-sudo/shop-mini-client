import { products } from "../data/products";
import { getCategories } from "../utils/product";

export default function CategoryList() {
  const categories = getCategories(products);

  return (
    <section className="container" id="categories">

      <h2 className="section-title">
        Danh mục sản phẩm
      </h2>

      <div className="category-list">

        {categories.map((category) => (
          <span
            key={category}
            className="category-item"
          >
            {category}
          </span>
        ))}

      </div>
    </section>
  );
}