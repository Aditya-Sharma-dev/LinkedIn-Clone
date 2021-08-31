import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

const Post = forwardRef(({ Name, Description, Message, PhotoURL }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar />
        <div className="post_info">
          <h4>{Name}</h4>
          <p>{Description}</p>
        </div>
      </div>
      <div className="post_body">
        <p><b>{Message}</b></p>
      </div>
      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltIcon} Title="Like" Color="Purple" />
        <InputOption Icon={ChatOutlinedIcon} Title="Comment" Color="Black" />
        <InputOption Icon={SendOutlinedIcon} Title="Send" Color="Black" />
        <InputOption Icon={ShareOutlinedIcon} Title="Share" Color="Blue" />
      </div>
    </div>
  );
});

export default Post;
