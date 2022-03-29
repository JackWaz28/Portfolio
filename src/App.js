import logo from './logo.svg';
import Sidebar from './sideBar/Sidebar'
import "./homePic.css"

function App() {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-blue-100 antialiased">
      <Sidebar />
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-red-100 md:ml-64">
        <img src="soloHiking.jpg" className="w-max h-auto z-0"></img>
        <p className="text-center absolute top-1/4 left-1/2 px-10 py-10 bg-red-100"> I am Jack Wasilewski<br></br>I am a Coder</p>
      </div>
    </div>
  );
}

export default App;
