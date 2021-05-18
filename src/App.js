import Addmovie from "./Addmovie";
import "./App.css";
import Movieslist from "./Movieslist";
import Navbar from "./Navbar";
import Moviescontext from "./Moviescontext";
import Getdata from "./Getdata";

function App() {
  return (
    <div className="App">
      <h1>Movies App</h1>
      <Moviescontext>
        <Navbar />
        <Addmovie />
        <Movieslist />
      </Moviescontext>
      {/* <Getdata /> */}
    </div>
  );
}

export default App;
