export default function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="footer">
        <div className="container">
  
          <p>
            © {year} ShopPXH · Bài tập môn Công nghệ lập trình hiện đại
          </p>
  
          <p>
            Hotline: 0389553698 · Email: hotro@shoppxh.vn
          </p>
  
        </div>
      </footer>
    );
  }