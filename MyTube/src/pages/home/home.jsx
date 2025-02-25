import React, { useState } from "react";
import "./home.css";
import Sidebar from "../../component/sidebar";
import Feed from "../../component/feed";

const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <div className="flex m-4">
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      ></Sidebar>
      <div>
        <Feed category={category}></Feed>
      </div>
    </div>
  );
};

export default Home;
