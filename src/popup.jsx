import React, { useState, useEffect } from "react";
import * as ReactDOMClient from 'react-dom/client';
import "./popup.css";
import Table from "./Table.jsx";

function Popup() {
  const [query, setQuery] = useState("");
  const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.twitch.tv/helix/search/channels?query=${encodeURIComponent(query)}`,
          {
            method: 'GET',
            headers: {
              "Authorization": "Bearer omxl8yqwvf1ywr9dyolaxqdw8r6pde",
              "Client-Id": "vq7ailyss8psqqnb26ok62i56k3peq",
            },
          }
        );
        const data = await response.json();
        setStreamers(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="popup-container">
      <h1>Streamer Notifier</h1>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table streamers={streamers} />
    </div>
  );
}

let root = ReactDOMClient.createRoot(document.getElementById("react-target"));
root.render(<Popup />);