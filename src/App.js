import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import "./App.css";
import NewsCard from "./components/NewsCard/NewsCard";

const alanKey =
  "56a7df4a97c62680c6267c06bfdeb48e2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div className='app'>
      <h1>Alan AI News Application</h1>
      <NewsCard articles={newsArticles} />
    </div>
  );
}

export default App;
