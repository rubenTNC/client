import { useDispatch, useSelector } from "react-redux";
import { getNewsAll } from "../../redux/features/news/newsSlice";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";
import { News } from "../News/News";

export const NewsList = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.news.loading);
  const news = useSelector((state) => state.news.newsList);
  useEffect(() => {
    dispatch(getNewsAll());
  }, [dispatch]);

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
