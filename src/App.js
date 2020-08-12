import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import "./App.css";

const alanKey =
  "56a7df4a97c62680c6267c06bfdeb48e2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("This code was executed");
        }
      },
    });
  }, []);

  return (
    <div className='app'>
      <h1>Alan AI News Application</h1>
    </div>
  );
}

export default App;
