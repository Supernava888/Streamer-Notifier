import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import "./popup.css";

function Popup() {
    return (
      <div className="popup-container">
        <h1>Streamer Notifier</h1>
        <input type="text" placeholder="Search" />
        <ul>
          <li>xqc</li>
          <li>Summit 1G</li>
          <li>Forsen</li>
        </ul>
      </div>
    );
  }
  let root = ReactDOMClient.createRoot(document.getElementById("react-target"));
  root.render(<Popup />);