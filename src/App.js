import logo from './logo.svg';
import Sidebar from './sideBar/Sidebar'
import "./homePic.css"

function App() {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
      <Sidebar />
      <div className="h-full w-full ml-14 mt-0 mb-10 md:ml-64">
        <img src="soloHiking.jpg" className="object-cover h-auto w-full"></img>
        <div classname="flex justify-center flex-row" >
          <p> HELLLLLLLLLLLLLLLLLLLLLOOOOOOOOOOOOOOOOOOO </p>
        </div>
      </div>
    </div>
  );
}

export default App;
