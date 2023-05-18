import axios from "axios";
import React, { useEffect, useState } from 'react';

function Spotify({ selectedTrack, onSelectedTrackIDChange }) {
  const [token, setToken] = useState('')
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])
  const [selectedTrackID, setSelectedTrackID] = useState('')

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

  const handleRadioChange = (e) => {
    onSelectedTrackIDChange(e.target.value);
  };

return (
  <div>
      <div className="text-gray-700">
        ②イメージソングを検索してください
      </div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch} type="submit" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          探す
        </button>
      </div>
      <h2>Search Results:</h2>
      <div className="">
        <div className="">
          {result.map((item) => (
            <div key={item.id}>
              <div className="flex items-center">
                <input
                  id={item.id}
                  type="radio"
                  value={item.id}
                  name="default-radio"
                  className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  checked={item.id === selectedTrackID}
                  onChange={handleRadioChange}
                  />
                <iframe title="Spotify"
                  style={{ borderRadius: '12px' }}
                  src={`https://open.spotify.com/embed/track/${item.id}`}
                  width="30%"
                  height="300px"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        Selected Track: {selectedTrackID}
      </div>
    </div>
  );
}

export default Spotify