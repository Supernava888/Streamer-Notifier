import React from "react";
import "./SearchResult.css";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';

export const SearchResult = ({ streamer }) => {
    return (
        <div className="search-result" onClick={(e) => alert(`blud clicked on ${streamer.display_name}`)}>
            <span className="streamer-name">{streamer.display_name}</span>
            <span className="pin">
                <PushPinOutlinedIcon />
            </span>
        </div>
    )
}