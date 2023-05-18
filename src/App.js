import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Spotify from './Spotify';

function App() {
  const [oshiName, setOshiName] = useState('')
  const handleOshiNameChange = (name) => {
    setOshiName(name);
    console.log(name);
  }

  return (
  <div className="container">
    <h1 className='text-3xl font-bold underline text-gray-800 p-6'>推しキャラ✖️イメソン</h1>
    <div className='text-gray-700'>
      ①推しキャラの名前を入力してください
    </div>
    <Form handleOshiNameChange={handleOshiNameChange} />
    <p className='pt-2 pb-6'>推しキャラの名前: {oshiName}</p>
    <Spotify />
  </div>
  );
}

export default App;
