import { Box, Typography, TextField, Autocomplete, Button } from "@mui/material";
import countri from "../utils/countries";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addWord } from "../redux/features/words/wordsSlice";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

export const AddWord = () => {
  
  const dispatch = useDispatch()

  const [word, setWord] = useState("")
  const [translation, setTranslation] = useState("")
  const [language, setLanguage] = useState("")

  const status = useSelector((state) => state.word.status);
  const message = useSelector((state) => state.word.message);

  const navigate = useNavigate();

  useEffect(() => {
    if(status && message) {
      toast(message);
    } else if (message) {
      toast(message);
      navigate("/myWords");
    }


  },[ status])

  const handleSubmit = () => {
    
    dispatch(addWord({ word, language, translation}))
  }

  return (
    <Box sx={{ marginTop: "50px" }}>
      <Typography variant="h5">Добавить слово</Typography>
      <form noValidate>
        <Box>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="word"
            label="Слово"
            name="word"
            autoFocus
            onChange={(event) => {
              setWord(event.target.value);
            }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={countri}
            onChange={(event) => {
              setLanguage(event.target.textContent);
            }}
            renderInput={(params) => <TextField {...params} label="Язык" />}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="translation"
            label="Перевод"
            name="translation"
            autoFocus
            onChange={(event) => {
              setTranslation(event.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              display: "block",
              minHeight: "45px",
              mt: "20px",
              fontSize: "20px",
              width: "100%",
            }}
          >
            Добавить слово в словарь
          </Button>
        </Box>
      </form>
    </Box>
  );
};
