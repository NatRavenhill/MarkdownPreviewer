import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
const marked = require("marked");

const Preview = () => {
  const preview = useSelector((state) => state.editor.preview);
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    marked.setOptions({ breaks: true});
    setMarkdown(marked(preview));
  }, [preview]);

  return <div id='preview'>{parse(markdown)}</div>;
};

export default Preview;
