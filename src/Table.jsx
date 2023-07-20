import React from "react";

const Table = ({ streamers }) => {
  if (!streamers || streamers.length === 0) {
    return <p>No streamers found.</p>; // Render a message when streamers array is empty or undefined
  }

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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;