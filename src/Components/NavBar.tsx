import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        |<Link to="/cash-book-form">cash-book</Link>|
        <Link to="/key-value">key-value</Link>|
      </nav>
    </>
  );
};

export default Navbar;
