import logo from './logo.svg';
import Sidebar from './sideBar/Sidebar'

function App() {
  return (
    <div className="flex flex-col">
    <Sidebar />
      <header className="flex flex-col">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
