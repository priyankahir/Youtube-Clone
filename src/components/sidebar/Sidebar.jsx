import "./Sidebar.css";
import Home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ sideBar, category, setCategory }) => {
  return (
    <>
      <div className={`${sideBar ? "sidebar" : "small-sidebar"} `}>
        <div className="shortcut-links">
          <div
            className={`sidelinks ${category === 0 ? "active" : ""}`}
            onClick={() => setCategory(0)}
          >
            <img src={Home} alt="" />
            <p>Home</p>
          </div>
          <div
            className={`sidelinks ${category === 20 ? "active" : ""}`}
            onClick={() => setCategory(20)}
          >
            <img src={game_icon} alt="" />
            <p>Game Icons</p>
          </div>
          <div
            className={`sidelinks ${category === 2 ? "active" : ""}`}
            onClick={() => setCategory(2)}
          >
            <img src={automobiles} alt="" />
            <p>Auto Mobiles</p>
          </div>
          <div
            className={`sidelinks ${category === 24 ? "active" : ""}`}
            onClick={() => setCategory(24)}
          >
            <img src={entertainment} alt="" />
            <p>Entertainment</p>
          </div>
          <div
            className={`sidelinks ${category === 28 ? "active" : ""}`}
            onClick={() => setCategory(28)}
          >
            <img src={tech} alt="" />
            <p>Tech</p>
          </div>
          <div
            className={`sidelinks ${category === 10 ? "active" : ""}`}
            onClick={() => setCategory(10)}
          >
            <img src={music} alt="" />
            <p>music</p>
          </div>
          <div
            className={`sidelinks ${category === 22 ? "active" : ""}`}
            onClick={() => setCategory(22)}
          >
            <img src={blogs} alt="" />
            <p>blogs</p>
          </div>
          <div
            className={`sidelinks ${category === 25 ? "active" : ""}`}
            onClick={() => setCategory(25)}
          >
            <img src={news} alt="" />
            <p>news</p>
          </div>
        </div>
        <hr />
        <div className="subscribed-list">
          <h3>Subscribed</h3>
          <div className="sidelink">
            <img src={jack} alt="" />
            <p>PewDiePie</p>
          </div>
          <div className="sidelink">
            <img src={jack} alt="" />
            <p>Mr Beast</p>
          </div>
          <div className="sidelink">
            <img src={jack} alt="" />
            <p>Crazy XYZ</p>
          </div>
          
          <div className="sidelink">
            <img src={simon} alt="" />
            <p>Priyank</p>
          </div>
          <div className="sidelink">
            <img src={tom} alt="" />
            <p>Vineet</p>
          </div>
          <div className="sidelink">
            <img src={megan} alt="" />
            <p>Mansi</p>
          </div>
          <div className="sidelink">
            <img src={cameron} alt="" />
            <p>Angel</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
