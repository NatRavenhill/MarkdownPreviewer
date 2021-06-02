import './App.css';
import React, { useEffect } from 'react';
import Editor from './features/editor/Editor';
import Preview from './features/editor/Preview';

function App() {
  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    scriptTag.async = true;
    document.body.appendChild(scriptTag);
  }, [])


  return (
    <div className="App">
      <Editor />
      <Preview />
    </div>
  );
}

export default App;
