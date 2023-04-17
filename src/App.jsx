import "./App.css";
import Card from "./components/Card";
import photos from "../data";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import UploadForm from "./components/UploadForm";

function App() {
  const [input, setInput] = useState();
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapse] = useState(false);
  const handleOnChange = (e) => setInput(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setItems([input, ...items]);
  };

  const toggle = () => {
    collapse(!isCollapsed);
  };
  return (
    <>
      <Navbar />
      <div className="container-text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>
          {isCollapsed ? "Close" : "+ Add"}
        </button>
        <div className="clearfix mb-4"></div>
        <UploadForm
          isVisible={isCollapsed}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        ></UploadForm>
        <h1>Gallery</h1>
        <div className="row">
          {items.map((photo, index) => (
            <Card key={index} src={photo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
