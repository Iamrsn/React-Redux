//sabse pehele configure store redux toolkit krege..
//fir iske baad reducer banate haii..isko slices kahtee haii..

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})