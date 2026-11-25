export default function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="footer">
        <div className="container">
  
          <p>
            © {year} ShopMini · Bài tập môn Công nghệ lập trình hiện đại
          </p>
  
          <p>
            Hotline: 0389553698 · Email: hotro@shopmini.vn
          </p>
  
        </div>
      </footer>
    );
  }