import Dictionary from "./Dictionary.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img className="Logo" src="https://www.shecodes.io/assets/branding/logo-shecodes-f9fa0540d113c086f61eb6e89466c0cbd24a42163b6a96d4b01da078803f53ee.png" alt="SheCodes Logo"></img>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
      <small>
        Coded by Laura Schum
        </small>
      </footer>
    </div>
    </div>
  );
}