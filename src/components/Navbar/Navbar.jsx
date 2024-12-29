import "./Navbar.css";
import { Link } from "react-router-dom";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";

const Navbar = ({ setSidebar }) => {
  return (
    <>
      <div className="flex-div">
        <div className="nav-left">
          <img
            src={menu_icon}
            className="menu-img"
            onClick={() =>
              setSidebar((prev) => (prev === false ? true : false))
            }
            alt=""
          />
          <Link to="/">
            <img src={logo} className="logo-img" alt="" />
          </Link>
        </div>
        <div className="nav-middle">
          <input type="text" placeholder="search" />
          <img src={search_icon} alt="" />
        </div>
        <div className="nav-right">
          <img src={upload_icon} alt="" />
          <img src={more_icon} alt="" />
          <img src={notification_icon} alt="" />
          <img src={profile_icon} className="user-icon" alt="" />
        </div>
      </div>
    </>
  );
};
export default Navbar;
