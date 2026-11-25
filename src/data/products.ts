export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    stock: number;
  };
  
  export const products: Product[] = [
    // ================= THỜI TRANG =================
    {
      id: 1,
      name: "Áo thun basic",
      price: 150000,
      image: "/images/ao-thun.jpg",
      category: "Thời trang",
      stock: 12
    },
    {
      id: 2,
      name: "Quần jean slim",
      price: 420000,
      image: "/images/quan-jean.jpg",
      category: "Thời trang",
      stock: 5
    },
    {
      id: 7,
      name: "Áo sơ mi trắng",
      price: 250000,
      image: "/images/ao-so-mi.jpg",
      category: "Thời trang",
      stock: 15
    },
    {
      id: 8,
      name: "Áo khoác hoodie",
      price: 350000,
      image: "/images/ao-hoodie.jpg",
      category: "Thời trang",
      stock: 10
    },
    {
      id: 9,
      name: "Quần short nam",
      price: 180000,
      image: "/images/quan-short.jpg",
      category: "Thời trang",
      stock: 20
    },
    {
      id: 10,
      name: "Áo polo nam",
      price: 220000,
      image: "/images/ao-polo.jpg",
      category: "Thời trang",
      stock: 8
    },
    {
      id: 11,
      name: "Giày sneaker trắng",
      price: 450000,
      image: "/images/giay-sneaker.jpg",
      category: "Thời trang",
      stock: 0
    },
  
    // ================= ĐIỆN TỬ =================
    {
      id: 3,
      name: "Tai nghe Bluetooth",
      price: 690000,
      image: "/images/tai-nghe.jpg",
      category: "Điện tử",
      stock: 0
    },
    {
      id: 6,
      name: "Chuột không dây",
      price: 245000,
      image: "/images/chuot.jpg",
      category: "Điện tử",
      stock: 15
    },
    {
      id: 12,
      name: "Bàn phím cơ RGB",
      price: 750000,
      image: "/images/ban-phim.jpg",
      category: "Điện tử",
      stock: 10
    },
    {
      id: 13,
      name: "Loa Bluetooth",
      price: 490000,
      image: "/images/loa-bluetooth.jpg",
      category: "Điện tử",
      stock: 12
    },
    {
      id: 14,
      name: "Sạc dự phòng 10000mAh",
      price: 320000,
      image: "/images/sac-du-phong.jpg",
      category: "Điện tử",
      stock: 18
    },
    {
      id: 15,
      name: "Webcam Full HD 1080p",
      price: 550000,
      image: "/images/webcam.jpg",
      category: "Điện tử",
      stock: 6
    },
    {
      id: 16,
      name: "Màn hình máy tính 24 inch",
      price: 2490000,
      image: "/images/man-hinh.jpg",
      category: "Điện tử",
      stock: 4
    },
  
    // ================= GIA DỤNG =================
    {
      id: 4,
      name: "Bình giữ nhiệt 500ml",
      price: 185000,
      image: "/images/binh-nuoc.jpg",
      category: "Gia dụng",
      stock: 20
    },
    {
      id: 17,
      name: "Nồi cơm điện 1.8L",
      price: 890000,
      image: "/images/noi-com-dien.jpg",
      category: "Gia dụng",
      stock: 8
    },
    {
      id: 18,
      name: "Ấm siêu tốc 1.5L",
      price: 250000,
      image: "/images/am-sieu-toc.jpg",
      category: "Gia dụng",
      stock: 15
    },
    {
      id: 19,
      name: "Máy xay sinh tố",
      price: 650000,
      image: "/images/may-xay-sinh-to.jpg",
      category: "Gia dụng",
      stock: 10
    },
    {
      id: 20,
      name: "Nồi chiên không dầu 5L",
      price: 1590000,
      image: "/images/noi-chien.jpg",
      category: "Gia dụng",
      stock: 0
    },
    {
      id: 21,
      name: "Quạt điện để bàn",
      price: 390000,
      image: "/images/quat-dien.jpg",
      category: "Gia dụng",
      stock: 12
    },
  
    // ================= PHỤ KIỆN =================
    {
      id: 5,
      name: "Balo laptop 15 inch",
      price: 550000,
      image: "/images/balo.jpg",
      category: "Phụ kiện",
      stock: 8
    },
    {
      id: 22,
      name: "Ví da nam",
      price: 190000,
      image: "/images/vi-da.jpg",
      category: "Phụ kiện",
      stock: 15
    },
    {
      id: 23,
      name: "Đồng hồ đeo tay",
      price: 650000,
      image: "/images/dong-ho.jpg",
      category: "Phụ kiện",
      stock: 7
    },
    {
      id: 24,
      name: "Kính mát thời trang",
      price: 250000,
      image: "/images/kinh-mat.jpg",
      category: "Phụ kiện",
      stock: 10
    },
    {
      id: 25,
      name: "Thắt lưng da nam",
      price: 180000,
      image: "/images/that-lung.jpg",
      category: "Phụ kiện",
      stock: 20
    },
    {
      id: 26,
      name: "Túi đeo chéo",
      price: 290000,
      image: "/images/tui-deo-cheo.jpg",
      category: "Phụ kiện",
      stock: 0
    }
  ];