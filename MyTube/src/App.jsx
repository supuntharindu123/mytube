import React, { useState } from "react";

import Navbar from "./component/navbar";
import Home from "./pages/home/home";
import Video from "./pages/videos/video";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [sidebar, setsidebar] = useState(true);
  return (
    <div className="text-3xl ">
      <Navbar setsidebar={setsidebar}></Navbar>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}></Home>} />
        <Route
          path="/video/:categoryId/:videoId"
          element={<Video></Video>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
