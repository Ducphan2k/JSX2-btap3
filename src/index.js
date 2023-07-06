import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card--header" />
        <img
          className="avatar"
          src="https://th.bing.com/th/id/OIP.GNE4wD9vCiG8BNRCYx7F3gAAAA?pid=ImgDet&rs=1"
          alt="avatar"
        />
        <div className="card--body">
          <div>
            <p className="text-header">Ruma Khan</p>
            <p className="text-sub">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
            <button className="btn third">FOLLOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
