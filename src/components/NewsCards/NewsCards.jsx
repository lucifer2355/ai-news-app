import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import NewsCard from "../NewsCard/NewsCard";

const NewsCards = ({ articles }) => {
  return (
    <Grow in>
      <Grid container alignItems='stretch' spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} i={i} key={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
