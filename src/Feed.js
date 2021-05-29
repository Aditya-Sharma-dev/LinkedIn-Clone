import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: "Aditya",
      description: "This is a Test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="input_options">
          <InputOption Icon={ImageIcon} Title="Photo" Color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} Title="Video" Color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} Title="Event" Color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            Title="Write article"
            Color="#7FC15E"
          />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          Name={name}
          Description={description}
          Message={message}
          PhotoUrl={photoUrl}
        />
    ))}
      {/* <Post
        Name="Aditya"
        Description="I'm all Rocks"
        Message="I'm the next papa react"
      /> */}
    </div>
    /*Feed*/
  );
}

export default Feed;
