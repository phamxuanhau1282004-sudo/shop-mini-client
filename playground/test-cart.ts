import { products } from "../src/data/products.ts";

import {
  addToCart,
  updateQuantity,
  removeFromCart,
  countItems,
  calcTotal
} from "../src/utils/cart.ts";

import type { CartItem } from "../src/utils/cart.ts";

import { formatPrice } from "../src/utils/format.ts";

import {
  filterProducts,
  getCategories
} from "../src/utils/product.ts";

// Tìm sản phẩm theo ID
const aoThun = products.find((p) => p.id === 1);
const binhNuoc = products.find((p) => p.id === 4);

if (!aoThun || !binhNuoc) {
  throw new Error("Không tìm thấy sản phẩm kiểm thử");
}

// Tạo giỏ hàng rỗng
let cart: CartItem[] = [];

// Thêm áo thun x1
cart = addToCart(cart, aoThun);

// Thêm áo thun x2
cart = addToCart(cart, aoThun, 2);

// Thêm bình giữ nhiệt x1
cart = addToCart(cart, binhNuoc);

// Đếm tổng số lượng sản phẩm
console.log("Số sản phẩm:", countItems(cart));

// Tính tổng tiền
console.log("Tổng tiền:", formatPrice(calcTotal(cart)));

// Cập nhật áo thun còn 1 sản phẩm
cart = updateQuantity(cart, aoThun.id, 1);

// Xóa bình giữ nhiệt
cart = removeFromCart(cart, binhNuoc.id);

// In giỏ hàng sau khi cập nhật
console.log(
  cart.map((i) => `${i.product.name} x${i.quantity}`)
);

// Lấy danh sách danh mục
console.log("Danh mục:", getCategories(products));

// Lọc đồ điện tử và sắp xếp giá tăng dần
console.log(
  "Điện tử, giá tăng dần:",
  filterProducts(products, {
    category: "Điện tử",
    sort: "asc"
  }).map((p) => p.name)
);

// Tìm áo có giá tối đa 300k
console.log(
  "Tìm 'áo', tối đa 300k:",
  filterProducts(products, {
    keyword: "áo",
    maxPrice: 300000
  }).map((p) => p.name)
);