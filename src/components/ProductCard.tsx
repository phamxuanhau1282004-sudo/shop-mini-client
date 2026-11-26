import type { Product } from "../data/products";
import { formatPrice } from "../utils/format";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const outOfStock = product.stock <= 0;
  const lowStock = product.stock >= 1 && product.stock <= 5;

  return (
    <div className="product-card">

      <img src={product.image} alt={product.name} />

      <div className="product-body">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p className="product-price">
          {formatPrice(product.price)}
        </p>

        {/* Trạng thái tồn kho */}
        {outOfStock ? (
          <span className="badge-out">
            Hết hàng
          </span>
        ) : lowStock ? (
          <span className="badge-low">
            Chỉ còn {product.stock} sản phẩm
          </span>
        ) : (
          <span className="badge-in">
            Còn hàng
          </span>
        )}

        {/* Khóa nút nếu hết hàng */}
        <button
          className="btn"
          disabled={outOfStock}
        >
          {outOfStock ? "Hết hàng" : "Thêm vào giỏ"}
        </button>

      </div>
    </div>
  );
}