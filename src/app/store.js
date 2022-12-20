import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/slices/counter";
import { pokemonSlice } from "../features/slices/pokemon/pokemonSlice";
import tasksReducer from "../features/tasks/taskSlice";
import { todoApi } from "../store/slices/todosAPI";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,

    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});
