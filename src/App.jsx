import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/home";
import Video from "./pages/Video/video";

function App() {
  const [sideBar, setSidebar] = useState(true);
  return (
    <>
      <div className="app-container">
        <Navbar setSidebar={setSidebar}></Navbar>
        <Routes>
          <Route path="/" element={<Home sideBar={sideBar}></Home>}></Route>
          <Route
            path="/video/:categoryId/:videoId"
            element={<Video></Video>}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
