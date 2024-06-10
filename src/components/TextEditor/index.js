import React from 'react'
import * as C from "./styles"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Size = ReactQuill.Quill.import('formats/size');
Size.whitelist = ['10px', '12px', '14px', '16px', '18px', '20px', '24px', '30px'];
ReactQuill.Quill.register(Size, true);

const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header">
      <option value="1">Título 1</option>
      <option value="2">Título 2</option>
      <option value="">Normal</option>
    </select>
    <select className="ql-size">
      <option value="10px">10px</option>
      <option value="12px">12px</option>
      <option value="14px">14px</option>
      <option value="16px">16px</option>
      <option value="18px">18px</option>
      <option value="20px">20px</option>
      <option value="24px">24px</option>
      <option value="30px">30px</option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-underline"></button>
    <button className="ql-strike"></button>
    <button className="ql-blockquote"></button>
    <select className="ql-align">
      <option defaultValue></option>
      <option value="center"></option>
      <option value="justify"></option>
      <option value="right"></option>

    </select>
    <button className="ql-link"></button>
    <button className="ql-clean"></button>
  </div>
);

const modules = {
  toolbar: {
    container: "#toolbar",
  },
};

const formats = [
  'header', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'align', 'link'
];

const TextEditor = ({ content, setContent }) => {
  return (
    <C.TextContainer>
      <CustomToolbar />
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
      />
    </C.TextContainer >
  )
}

export default TextEditor