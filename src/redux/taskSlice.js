import { createSlice, nanoid } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: "tasks",
    initialState: [],

    reducers: {
        addTask: (state, action) => {
            state.push({
                id: nanoid(),
                title: action.payload.task,
            });

        },

        // delete the task
        deleteTask: (state, action) => {
            console.log(nanoid());
            return state.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;