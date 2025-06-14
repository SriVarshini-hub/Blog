import { React, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b>Draft
          </span>
          <span>
            <b>Visibility:</b>Public
          </span>
          <input type="file" name="" id="file" style={{ display: "none" }} />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="Destinations" id="art" />
            <label htmlfor="Destinations">Destinations</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Wlid Life" id="Wlid Life" />
            <label htmlfor="Wlid Life">Wlid Life</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Bucket List" id="Buck List" />
            <label htmlfor="Bucket List">Bucket List</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Hike" id="Hike" />
            <label htmlfor="Hike">Hike</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Beaches" id="Beaches" />
            <label htmlfor="Beaches">Beaches</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="Gallery" id="gallery" />
            <label htmlfor="Gallery">Gallery</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
