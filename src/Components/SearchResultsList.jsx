import React from "react";
import "./SearchResultsList.css"
import { SearchResult } from "./SearchResult.jsx";

export const SearchResultsList = ({ streamers, onPinStreamer }) => {
    if (!streamers || streamers.length === 0) {
        return <p>No streamers found.</p>; // Render a message when streamers array is empty or undefined
    }
    return (
        <div className="results-list">
            {streamers.map((streamer) => {
                return <SearchResult streamer={streamer} key={streamer.id} onPinStreamer={(onPinStreamer)} />;
            })}
        </div>
    );
};