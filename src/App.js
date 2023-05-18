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
    <h1 className='text-3xl font-bold underline'>推しキャラ✖️イメソン</h1>
    <div className='instruction'>
      ①推しキャラの名前を入力してください
    </div>
    <Form handleOshiNameChange={handleOshiNameChange} />
    <p>推しキャラの名前: {oshiName}</p>
    <Spotify />
  </div>
  );
}

export default App;
