import React from "react";
import "./SearchResult.css";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';

export const SearchResult = ({ streamer, onPinStreamer }) => {
    const handlePinClick = () => {
        onPinStreamer(streamer);
    };

    return (
        <div className="search-result">
            <span className="streamer-name">{streamer.display_name}</span>
            <span className="pin" onClick={handlePinClick}>
                <PushPinOutlinedIcon />
            </span>
        </div>
    )
}