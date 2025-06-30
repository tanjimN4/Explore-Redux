import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
    filter: "all" | "High" | "medium" | "low";
}

const initialState :InitialState= {
    tasks: [
        {
            id: "asdfghjkl",
            title: "Initialize frontend",
            description: "Create Home Page And Routing",
            duDate: "2025-11",
            isCompleted: false,
            priority: "High",
        },
       
    ],
     filter :"all",
};
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
});

export const selectTasks =(state : RootState) => state.todo.tasks;
export const selectFilter =(state : RootState) => state.todo.filter;
export default taskSlice.reducer;