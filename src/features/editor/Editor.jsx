import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { replaceText } from "./editorSlice";
const Editor = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.editor.value);

  const handleTextChange = (event) => {
    console.log(event);
    if (event.target) {
      dispatch(replaceText(event.target.value));
      event.preventDefault();
    }
  };

  return <textarea id="editor" value={input} onChange={handleTextChange} />;
};

export default Editor;
