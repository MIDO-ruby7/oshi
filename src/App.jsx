import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Spotify from './Spotify';

function App() {
  const [oshiName, setOshiName] = useState('')
  const [selectedTrack, setSelectedTrack] = useState('')

  const handleOshiNameChange = (name) => {
    setOshiName(name);
  }

  const handSelectedTrackIDChange = (trackId) => {
    setSelectedTrack(trackId);
    console.log(trackId)
  }

  return (
  <div className="container px-5 py-24 text-center bg-gradient-to-r from-yellow-400 via-gray-50 to-teal-300 mx-auto">
    <h1 className='text-3xl font-bold underline text-gray-800 p-6'>推しキャラ✖️イメソン</h1>
    <p className='pt-2 pb-6'>推しキャラの名前: {oshiName}</p>
    <div>イメージソング:
      <iframe title="Spotify"
              style={{ borderRadius: '12px' }}
              src={`https://open.spotify.com/embed/track/${selectedTrack}`}
              width="30%"
              height="300px"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className='position: items-center'
      />
    </div>
    <div className='text-gray-700'>
      ①推しキャラの名前を入力してください
    </div>
    <Form handleOshiNameChange={handleOshiNameChange} />
    <Spotify selectedTrack={selectedTrack} onSelectedTrackIDChange={setSelectedTrack} />
  </div>
  );
}

export default App;
