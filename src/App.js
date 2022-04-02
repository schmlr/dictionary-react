import Dictionary from "./Dictionary.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       📚 Dictionary
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
      <small>
        Coded by Laura Schum, open-source code available on <a href="https://github.com/schmlr/weather-app-react" target="_blank" rel="noreferrer">GitHub</a>, and hosted on <a href="https://quiet-tapioca-cfcf7c.netlify.app" target="_blank" rel="noreferrer">Netlify</a>.
        </small>
      </footer>
    </div>
    </div>
  );
}