import React from 'react'
import { TwitterIcon, TwitterShareButton } from 'react-share';

const ShareButton = ({ selectedTrack, oshiName }) => {
  const URL = `https://open.spotify.com/embed/track/${selectedTrack}`;
  const QUOTE = `私の推しキャラ【${oshiName}】のいめーじソングはこれだ！`;

  return (
    <div>
      <TwitterShareButton url={URL} title={QUOTE}>
        <TwitterIcon size={40} round />
        <p>シェアする</p>
      </TwitterShareButton>
    </div>
  );
}

export default ShareButton;