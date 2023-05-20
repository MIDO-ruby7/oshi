import React from 'react'
import { TwitterIcon, TwitterShareButton } from 'react-share';

const ShareButton = ({ selectedTrack, oshiName }) => {
  const URL = `https://open.spotify.com/embed/track/${selectedTrack}`;
  const QUOTE = `私の推しキャラ【${oshiName}】のいめーじソングはこれだ！ https://oshi-ten.vercel.app/ #推しキャライメソン`;

  return (
    <div className='mt-4'>
      <TwitterShareButton url={URL} title={QUOTE}>
        <TwitterIcon size={40} round />
      </TwitterShareButton>
      <p className='text-gray-600 font-semibold'>シェアする</p>
    </div>
  );
}

export default ShareButton;