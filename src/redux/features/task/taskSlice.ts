import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";



interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
    tasks: [
        {
            "title": "ygigohsgd",
            "description": "kguiojkhdgdck",
            "dueDate": "2025-07-22T18:00:00.000Z",
            "priority": "Medium",
            "assignedTo": null,
            "id": "zLb3OS8XA1PKxSqo7DMWc",
            "isCompleted": false
        },
        {
            "title": "ygigo",
            "description": "kguioj",
            "assignedTo": null,
            "dueDate": "2025-07-22T18:00:00.000Z",
            "priority": "Medium",
            "id": "zLb3OS8XA1PKxSqo7DMWf",
            "isCompleted": false
        },
      

    ],
    filter: "all",
};

type DraftTask = Pick<ITask, 'title' | 'description' | 'dueDate' | 'priority' | 'assignedTo'>;

const createTask = (taskData: DraftTask): ITask => {
    return {
        ...taskData,
        id: nanoid(),
        isCompleted: false,
        assignedTo: taskData.assignedTo || null, 
    };
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const taskData = createTask(action.payload);
            state.tasks.push(taskData);
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            console.log("Toggle task completion for ID:", action.payload);
            
            const task = state.tasks.find(t => t.id === action.payload);
            if (task) {
                task.isCompleted = !task.isCompleted;
            }
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            console.log("Delete task with ID:", action.payload);
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        updateTask: (state, action: PayloadAction<ITask>) => {
            const findUpdateTask = state.tasks.find(task => task.id === action.payload.id);
            if(findUpdateTask){
                findUpdateTask.title = action.payload.title;
                findUpdateTask.description = action.payload.description;
                findUpdateTask.dueDate = action.payload.dueDate;
                findUpdateTask.priority = action.payload.priority;
            }
        },
        updateFilter: (state, action: PayloadAction<"all" | "high" | "medium" | "low">) => {
            state.filter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(removeUser,(state,action)=>{
           state.tasks.forEach(task => task.assignedTo === action.payload ? (task.assignedTo=null) : task);
        })
    }
});

export const selectTasks = (state: RootState) => {
    const filter = state.todo.filter;
    if (filter === "low") {
        return state.todo.tasks.filter(task => task.priority === "Low");
    } else if (filter === "medium") {
        return state.todo.tasks.filter(task => task.priority === "Medium");
    }
    else if (filter === "high") {   
        return state.todo.tasks.filter(task => task.priority === "High");
    }else if (filter === "all") {
        return state.todo.tasks;    
    }
   return state.todo.tasks
}
// export const selectFilter = (state: RootState) => state.todo.filter;


export const { addTask ,toggleCompleteState,deleteTask,updateTask,updateFilter} = taskSlice.actions;

export default taskSlice.reducer;