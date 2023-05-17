import './App.css';
import Spotify from './Spotify';

function App() {
  return (
  <div className="container">
    <h2>推しキャライメソン</h2>
    <form>
      <input type="text" placeholder="推しを入力してください" />
    </form>
    <Spotify />
  </div>
  );
}

export default App;
