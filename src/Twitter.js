import { TwitterIcon, TwitterShareButton } from 'react-share';
const URL = 'https://www.youtube.com/watch?v=7sDY4m8KNLc';
const QUOTE = 'This is a test';

const TwitterShareButton = (props) => {
  return (
    <div>
      <TwitterShareButton url={URL} title={QUOTE}>
        <TwitterIcon size={24} round />
      </TwitterShareButton>
    </div>
  );
}