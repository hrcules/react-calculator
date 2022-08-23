import "./styles.css";

import "react-icons/ri";

export function Footer() {
  return (
    <footer className="footer">
      <span className="footer__copy">
        Feito com <i className="ri-heart-fill"></i> por{" "}
        <a href="https://portfolio-hrcules.vercel.app/">Hércules</a>!
      </span>
    </footer>
  );
}
