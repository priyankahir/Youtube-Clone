import React, { useState } from "react";
import Feed from "../../components/Feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

function Home({ sideBar }) {
  const [category, setCategory] = useState(0);
  return (
    <>
      <div className="home-container">
        <Sidebar
          sideBar={sideBar}
          category={category}
          setCategory={setCategory}
        ></Sidebar>
        <Feed category={category} setCategory={setCategory}></Feed>
      </div>
    </>
  );
}

export default Home;
