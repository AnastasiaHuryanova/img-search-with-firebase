import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import photos from "../data";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-text-center mt-5">
        <h1>Gallery</h1>
        <div className="row">
          {photos.map((photo) => (
            <Card src={photo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
