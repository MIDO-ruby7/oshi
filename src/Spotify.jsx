import axios from "axios";
import React, { useEffect, useState } from 'react';
// App.cssの読み込み
import './App.css';

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
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white rounded border border-gray-100 focus:ring-2 focus:ring-blue-500  focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 mt-4 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="曲名、アーティスト名"
      />
      <button onClick={handleSearch} type="submit" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        検索
      </button>
    </div>
    <h2 className="mb-4 mt-4 text-gray-700 font-semibold">③該当の曲を選択してシェアしよう！</h2>
    <div className="">
      <div className="text-gray-700">
        {result.map((item) => (
          <div key={item.id}>
            <div className="flex justify-center">
              <input
                id={item.id}
                type="radio"
                value={item.id}
                name="radio"
                className="radio"
                checked={item.id === selectedTrackID}
                onChange={handleRadioChange}
                />
              <iframe title="Spotify"
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/track/${item.id}`}
                width="70%"
                height="300px"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default Spotify