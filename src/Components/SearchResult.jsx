import React from "react";
import "./SearchResult.css";

export const SearchResult = ({ streamer }) => {
    return (
        <div className="search-result" onClick={(e) => alert(`blud clicked on ${streamer.display_name}`)}>{streamer.display_name}</div>
    )
}