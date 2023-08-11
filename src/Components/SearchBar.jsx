import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = ({ setStreamers }) => {
    const [query, setQuery] = useState("");
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://api.twitch.tv/helix/search/channels?query=${encodeURIComponent(query)}`,
              {
                method: 'GET',
                headers: {
                  "Authorization": "Bearer b9lsheeh6onkevvrt3xdsv33pgf26p",
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
        <div className = "search">
            <SearchIcon id="search-icon" />
            <input
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;