import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import newsSlice from './features/news/newsSlice';
import popupSlice from './features/popap/popupSlice';
import wordsSlice from './features/words/wordsSlice';






export const store = configureStore({
    reducer: {
        auth: authSlice,
        news: newsSlice,
        popup: popupSlice,
        word: wordsSlice
    },
})

