import { useDispatch, useSelector } from "react-redux";
import { getNewsAll } from "../../redux/features/news/newsSlice";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";
import { News } from "../News/News";
import { incrementQuantityNews } from "../../redux/features/news/newsSlice";

export const NewsList = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.news.loading);
  const news = useSelector((state) => state.news.newsList);
  const count = useSelector((state) => state.news.quantityNews);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        dispatch(incrementQuantityNews());
      }
    });
  });

  let nodeNews = document.querySelectorAll(".news-item");
  let lastNews = nodeNews[nodeNews.length - 2];

  useEffect(() => {
    dispatch(getNewsAll(count));
  }, [dispatch, count, lastNews]);

  useEffect(() => {
    if (lastNews) {
      observer.observe(lastNews);
    }
  }, [lastNews, count]);

  return (
    <Box
      sx={{
        maxWidth: { sm: "75%" },
      }}
    >
      <Typography variant="h4">News</Typography>
      <Box
        sx={{
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {news?.map((newsItem) => (
          <News props={newsItem} key={newsItem._id} />
        ))}
      </Box>
      {loading && <CircularProgress />}
    </Box>
  );
};
