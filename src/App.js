import React from "react";
import "./App.css";
import Logo from "./components/Logo";

const App = () => {
  return (
    <div className="container">
      <Logo />
      <div className="header">Header</div>
      <div className="nav">Nav</div>
      <div className="content">content</div>
      <div className="footer">Footer</div>
    </div>
  );
};

export default App;
