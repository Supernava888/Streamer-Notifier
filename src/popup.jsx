import React, { useState, useEffect } from "react";
import * as ReactDOMClient from 'react-dom/client';
import "./popup.css";
import SearchBar from "./Components/SearchBar.jsx";
import Table from "./Components/Table.jsx";
import { SearchResultsList } from "./Components/SearchResultsList.jsx";

function Popup() {
  const [streamers, setStreamers] = useState([]);
  const [pinnedStreamers, setPinnedStreamers] = useState([]);

  // Load pinned streamers from storage when the extension is opened
  useEffect(() => {
    chrome.storage.sync.get("pinnedStreamers", (data) => {
      const storedPinnedStreamers = data.pinnedStreamers || [];
      setPinnedStreamers(storedPinnedStreamers);
    });
  }, []);

  const handlePinStreamer = (streamer) => {
    // Check if the streamer is not already in the pinnedStreamers array
    if (!pinnedStreamers.find((pinnedStreamer) => pinnedStreamer.id === streamer.id)) {
      // Add the streamer to the pinnedStreamers array
      const updatedPinnedStreamers = [...pinnedStreamers, streamer];
      setPinnedStreamers(updatedPinnedStreamers);

      // Store the updated pinned streamers in storage
      chrome.storage.sync.set({ pinnedStreamers: updatedPinnedStreamers });

      // Cache the updated pinned streamers array in the service worker cache
      caches.open('streamer-cache').then((cache) => {
        cache.put('pinnedStreamers', new Response(JSON.stringify(updatedPinnedStreamers)));
      });
    }
  };

  const handleUnpinStreamer = (streamer) => {
    // Remove the streamer from the pinnedStreamers array
    const updatedPinnedStreamers = pinnedStreamers.filter(
      (pinnedStreamer) => pinnedStreamer.id !== streamer.id
    );
    setPinnedStreamers(updatedPinnedStreamers);

    // Store the updated pinned streamers in storage
    chrome.storage.sync.set({ pinnedStreamers: updatedPinnedStreamers });

    // Cache the updated pinned streamers array in the service worker cache
    caches.open('streamer-cache').then((cache) => {
      cache.put('pinnedStreamers', new Response(JSON.stringify(updatedPinnedStreamers)));
    });
  };


  return (
    <div className="popup-container">
      <h1>Streamer Notifier</h1>
      <SearchBar setStreamers={setStreamers} />
      <SearchResultsList streamers={streamers} onPinStreamer={handlePinStreamer} />
      <Table streamers={pinnedStreamers} onUnpinStreamer={handleUnpinStreamer} />
    </div>
  );
}

let root = ReactDOMClient.createRoot(document.getElementById("react-target"));
root.render(<Popup />);
