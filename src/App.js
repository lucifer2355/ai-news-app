import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import "./App.css";
import useStyles from "./style";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "56a7df4a97c62680c6267c06bfdeb48e2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const classes = useStyles();
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(0);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src='https://alan.app/voice/images/previews/preview.jpg'
          alt='alanLogo'
          className={classes.alanLogo}
        />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}

export default App;
