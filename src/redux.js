import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
  ],
  reducers: {
    addTask: (state, action) => {
      // { type: "todo/addTask", payload: "Aller au boulot" }
      const newTask = {
        id: Date.now(),
        done: false,
        text: action.payload,
      };
      state.push(newTask);
    },
    toggleTask: (state, action) => {
      // { type: "todo/toggleTask", payload: 20 }
      const task = state.find((t) => t.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: (state, action) => {
      // { type: "todo/deleteTask", payload: 20}
      state = state.filter((t) => t.id !== action.payload);
      return state;
    },
  },
});

// Action Creator via toolkit
export const { addTask, deleteTask, toggleTask } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

/*
// Action Creator
export const createToggle = (id) => {
  return {
    type: "todo/toggleTask",
    payload: id,
  };
};

export const addTask = (id) => {
  return {
    type: "todo/addTask",
    payload: id,
  };
};

export const deleteTask = (id) => {
  return {
    type: "todo/deleteTask",
    payload: id,
  };
};
*/
