import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { login, selectUser } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />
      {
        !user ? (
          <Login/>
        ) : (
        <div className="app_body">
        <Sidebar />
        <Feed />
        </div>
        )
      }
      

        {/*Widgets*/}
      
    </div>
  );
}

export default App;
