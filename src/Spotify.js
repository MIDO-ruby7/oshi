import axios from "axios";
import React, { useEffect, useState } from 'react'

function Spotify() {
  const [token, setToken] = useState('')
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.post('https://accounts.spotify.com/api/token',
        null,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Basic ${btoa(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`)}`
            },
            params: {
              grant_type: 'client_credentials'
            },
          }
        );
        setToken(response.data.access_token);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);

  const handleSearch = async (e) => {
    try{
      const response = await axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(
        search)}&type=track,artist`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
        }
      );
      setResult(response.data.tracks.items);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

return (
  <div>
      <h1>Spotify App</h1>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <h2>Search Results:</h2>
      <ul>
        {result.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Spotify