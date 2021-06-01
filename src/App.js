import './App.css';
import React, { useEffect } from 'react';
import Editor from './features/editor/Editor';

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
    </div>
  );
}

export default App;
