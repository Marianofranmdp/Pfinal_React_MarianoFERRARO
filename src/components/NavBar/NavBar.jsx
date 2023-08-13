import CartWidget from "../CartWidget/CartWidget";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-3 border-bottom border-primary p-0">
        <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          <Link to={'/'} className="navbar-brand">
          <img className="iconMenu" src={props.logoMenu}  alt="logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/'} className="nav-link active m-2" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/category/1'} className="nav-link m-2" href="/">
                  PC
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/category/2'} className="nav-link m-2" href="/">
                  PS4
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/category/3'} className="nav-link m-2" href="/">
                  XBOX
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <a
                activeclassname="active"
                className="nav-item nav-link"
                to="/login" href="/"
              >
                Login
                <LoginOutlinedIcon />
              </a>
            </ul>
          </div>
          <ul className="navbar-nav md-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={'/cart'} className="nav-link" href="/">
                    <CartWidget />
                  </Link>
                </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
