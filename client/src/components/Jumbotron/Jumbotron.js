import React from "react";

const Jumbotron = ({ children }) => (
  <div className="jumbotron jumbotron-fluid">
    <div 
      style={{ height: 150, clear: "both", paddingTop: 10, paddingBottom: 20, textAlign: "Center",
    backgroundImage: `url("https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")`,
  color: "white" }}
      className="container">
      {children}
    </div>
  </div>
);

export default Jumbotron;
