export default function Banner() {
    return (
      <section className="container">
        <div className="banner">
  
          <div className="banner-main">
  
            <div className="banner-content">
  
              <span className="banner-label">
                ✦ KHÁM PHÁ BỘ SƯU TẬP MỚI
              </span>
  
              <h1>
                Mua sắm thông minh.
                <span>Nâng tầm cuộc sống.</span>
              </h1>
  
              <p>
                Khám phá các sản phẩm thời trang, công nghệ
                và gia dụng với mức giá hấp dẫn tại ShopPXH.
              </p>
  
              <div className="banner-actions">
                <a href="#products" className="banner-primary">
                  Khám phá ngay →
                </a>
  
                <a href="#categories" className="banner-secondary">
                  Xem danh mục
                </a>
              </div>
  
            </div>
  
            <div className="banner-visual">
              <img
                src="/images/tai-nghe.jpg"
                alt="Tai nghe Bluetooth"
              />
              <img
                src="/images/dong-ho.jpg"
                alt="Đồng hồ"
              />
              <img
                src="/images/giay-sneaker.jpg"
                alt="Giày sneaker"
              />
            </div>
  
          </div>
  
          <div className="banner-benefits">
  
            <div className="benefit-item">
              <span>🛡️</span>
              <div>
                <h4>Chất lượng</h4>
                <p>Sản phẩm chọn lọc</p>
              </div>
            </div>
  
            <div className="benefit-item">
              <span>🚚</span>
              <div>
                <h4>Giao hàng</h4>
                <p>Nhanh chóng</p>
              </div>
            </div>
  
            <div className="benefit-item">
              <span>🎧</span>
              <div>
                <h4>Hỗ trợ</h4>
                <p>Tận tâm</p>
              </div>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }