import React, { useState } from "react";
import * as ReactDOMClient from 'react-dom/client';
import "./popup.css";
import SearchBar from "./Components/SearchBar.jsx"
import Table from "./Table.jsx";
import { SearchResultsList } from "./Components/SearchResultsList.jsx";

function Popup() {

  const [streamers, setStreamers] = useState([]);

  return (
    <div className="popup-container">
      <h1>Streamer Notifier</h1>
      <SearchBar setStreamers={setStreamers} />
      <SearchResultsList streamers={streamers}/>
      {streamers && streamers.length > 0 ? (
        <Table streamers={streamers} />
      ) : (
        <p>No streamers found.</p>
      )}
    </div>
  );
}

let root = ReactDOMClient.createRoot(document.getElementById("react-target"));
root.render(<Popup />);