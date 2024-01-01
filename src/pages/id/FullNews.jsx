import { getUrlId } from "../../utils/getUrlId";
import { useDispatch, useSelector } from "react-redux";
import { getFullNews } from "../../redux/features/news/newsSlice";
import { useEffect } from "react";
import { Box, Typography, ImageListItem } from '@mui/material';

export function FullNews({ props }) {
  const id = getUrlId();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.news.loading);
  const news = useSelector((state) => state.news.fullNews);
  useEffect(
    () => {
      dispatch(getFullNews(id));
    },
    dispatch,
    loading,
    news
  );
  return (
    <Box sx={{display:"flex", justifyContent:"center"}}>
      {news && (
        <Box sx={{maxWidth:"900px", marginTop: "50px", display:"flex", flexDirection:"column", alignItems:"center", gap:"20px", padding:"0px 15px" }}>
          <Typography variant="h4" sx={{fontSize:{xs:"24px", sm:"30px"}}}>
            {news.title}
          </Typography>
          <ImageListItem
            sx={{ maxWidth: "60%", minWidth: "110px", marginLeft: "20px" }}
          >
            <img src={news.img} alt={news.title} loading="lazy" />
          </ImageListItem>
          <Typography variant="h5" sx={{fontSize:{xs:"18px", sm:"26px"}}} >
            {news.subtitle}
          </Typography>
          <Box sx={{display:"flex", flexDirection:"column", gap:"20px"}}>
            {
              news.text.map((textItem) => (
                <Typography variant="h6" sx={{fontSize:{xs:"14px", sm:"18px"}}}>
                  {textItem}
                </Typography>
              ))
            }
          </Box>
          
        </Box>

      )}
    </Box>
  );
}
