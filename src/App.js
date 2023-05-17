import './App.css';
import Gallery from './Gallery';
import Spotify from './Spotify';

function App() {
  // const CLIENT_ID = "39be49d453a74fc394f42c1a469c8f6c"
  // const REDIRECT_URI = "http://localhost:3000"
  // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  // const RESPONSE_TYPE = "token"
  return (
  <div className="container">
    <h2>推しキャライメソン</h2>
    <form>
      <input type="text" placeholder="推しを入力してください" />
    </form>
    <form>
      <input type="text" placeholder="曲名・アーティスト名を入力してください" />
    </form>
    <Spotify />
    <Gallery />
  </div>
  );
}

export default App;
