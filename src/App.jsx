import "./App.css";
import Card from "./components/Card";
import photos from "../data";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import UploadForm from "./components/UploadForm";

function App() {
  const [count, setCount] = useState();
  const [inputs, setInputs] = useState({ title: null, file: null, path: null });
  const [items, setItems] = useState(photos);
  const [isCollapsed, collapse] = useState(false);
  const handleOnChange = (e) => {
    e.target.name === "file"
      ? setInputs({
          ...inputs,
          file: e.target.files[0],
          path: URL.createObjectURL(e.target.files[0]),
        })
      : setInputs({ ...inputs, title: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setItems([inputs.path, ...items]);
    setInputs({ title: null, file: null, path: null });
    collapse(false)
  };

  useEffect(() => {
    setCount(`you have ${items.length} image${items.length === 1 ? "" : "s"}`);
  }, [items]);

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
          inputs={inputs}
          isVisible={isCollapsed}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        ></UploadForm>
        {count}
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
