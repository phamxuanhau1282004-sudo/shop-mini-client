import { products } from "../data/products";

export default function CategoryList() {
  const categories = Array.from(
    new Set(products.map((p) => p.category))
  );

  return (
    <section className="container">
      <h2 className="section-title">
        Danh mục sản phẩm
      </h2>

      <div className="category-list">
        {categories.map((category) => (
          <span key={category} className="category-item">
            {category}
          </span>
        ))}
      </div>
    </section>
  );
}