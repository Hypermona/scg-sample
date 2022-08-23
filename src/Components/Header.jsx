import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="head">
      <Link to="/" className="link">
        <div className="logo">SCG</div>
      </Link>
      <div className="=links">
        <Link to="services" className="link">
          Services
        </Link>
        <Link to="contact" className="link">
          ContactUs
        </Link>
      </div>
    </div>
  );
}

export default Header;
