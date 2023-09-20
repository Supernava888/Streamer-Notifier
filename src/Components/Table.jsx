import React from "react";
import PushPinIcon from '@mui/icons-material/PushPin';
import "./Table.css";

const Table = ({ streamers, onUnpinStreamer }) => {

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Game</th>
          <th>Live</th>
        </tr>
        {streamers.map((streamer) => (
          <tr key={streamer.id}>
            <td>{streamer.display_name}</td>
            <td>{streamer.game_name}</td>
            <td>{streamer.is_live ? "Live" : "Offline"}</td>
            <td>
              <span className="unpin" onClick={() => onUnpinStreamer(streamer)}>
                <PushPinIcon />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
