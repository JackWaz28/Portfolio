import logo from './logo.svg';
import Sidebar from './sideBar/Sidebar'
import "./homePic.css"

function App() {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-blue-100 antialiased">
      <Sidebar />
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-blue-100 md:ml-64">
        <img src="soloHiking.jpg" className="w-auto h-screen z-0"></img>
        <p className="text-center absolute top-1/4 left-1/2 px-10 py-10 bg-red-100"> I am Jack Wasilewski<br></br>I am a Coder</p>
      </div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-red-400 md:ml-64">
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 p-4 gap-4">
          <div className="ml-20">
            <p className="text-3xl font-bold">About Me</p>
            <img src="facePic.jpg" className="mt-10 outline-slate outline outline-slate-100 "></img>
          </div>
          <div className="col-span-2 ml-20">
            <h1 className="mt-20 mr-40 font-bold text-xl"> Who am I??</h1>
            <p className="mt-5 mr-40 divide-y-8 mb-5 border-b-2"> Hi, I'm  Jack Wasilewksi.  I like to solve problems, create interesting and innovative products with team members, and I love to learn.  
              I am currently exploring opportunities as a Software Engineer in the Washington, DC, Virginia and Maryland area.  I'm open to new ideas, concepts, and value creative solutions
              which makes me a good fit as a Software Engineer because I know that the key to releasing a successful product is effective communication between team members and the customer.
              I am someone that can find balance in a lot of situations and I want to do what I love to enjoy my work. </p>
              <p className="mt-5 mr-40 divide-y-8"> From: Virginia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
