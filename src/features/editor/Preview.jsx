import React from "react";
import { useSelector} from "react-redux";

const Preview = () => {
  const preview = useSelector((state) => state.editor.preview);
  return <p id="preview">{preview}</p>;
};

export default Preview;