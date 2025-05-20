import { createSlice } from "@reduxjs/toolkit";

const loadTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];
const saveTasks = (tasks) => localStorage.setItem("tasks", JSON.stringify(tasks));

const taskSlice = createSlice({
    name: "tasks",
    initialState: loadTasks(),
    reducers: {
        addTask: (state, action) => {
            const newTask = { id: Date.now(), title: action.payload, completed: false };
            state.push(newTask);
            saveTasks(state);
        },
        removeTask: (state, action) => {
            const updatedTasks = state.filter(task => task.id !== action.payload);
            saveTasks(updatedTasks);
            return updatedTasks;
        },
        toggleTask: (state, action) => {
            const updatedTasks = state.map(task => 
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
            saveTasks(updatedTasks);
            return updatedTasks;
        },
        editTask: (state, action) => {
            const { id, newTitle } = action.payload;
            const updatedTasks = state.map(task => 
                task.id === id ? { ...task, title: newTitle } : task
            );
            saveTasks(updatedTasks);
            return updatedTasks;
        }
    }
});

export const { addTask, removeTask, toggleTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
