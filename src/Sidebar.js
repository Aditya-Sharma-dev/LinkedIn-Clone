import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
        </div>
    )
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg/1200px-Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg"
          alt=""
        />
        <Avatar className="sidebar_Avatar"><img src="https://scx1.b-cdn.net/csz/news/800a/2015/alberteinste.jpg" alt="" /></Avatar>
        <h2>Aditya Sharma</h2>
        <h4>itsadityasharma02@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statnumber">2444</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statnumber">2466</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("development")}
        {recentItem("design")}
        {recentItem("HTML")}
      </div>

    </div>
  );
}
export default Sidebar;
