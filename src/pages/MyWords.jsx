import { Box, List, ListItem, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyWords } from "../redux/features/words/wordsSlice";

export function MyWords() {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.word.wordsList);
  useEffect(() => {
    dispatch(getMyWords());
  }, []);
  return (
    <Box >
        <Box sx={{position:"fixed", top:"65px", zIndex:100, width: "100%", minHeight:"50px"}}>
        <Typography variant="h5" > Мои слова</Typography>
        </Box>
      <List sx={{display:"flex", flexDirection:"column", gap:"10px"}}>
        {words?.map((item) => (
          <ListItem sx={{ display: "flex",gap:"10px", justifyContent:"space-between", border:"1px solid black", borderRadius:"5px" }} key={item._id}>
            <Typography variant="h6" >{item.word}</Typography>
            <Typography variant="h6" sx={{flexGrow: "1"}}>{item.translation}</Typography>
            <Typography variant="h6" >{item.language}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
