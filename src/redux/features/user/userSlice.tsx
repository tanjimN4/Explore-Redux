import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";


interface InitialState {
    user: IUser[];
}

const initialState: InitialState = {
    user: [
        
    ]
}

type DraftUser = Pick<IUser, 'name'>;

const createUser = (userData: DraftUser): IUser => {
    return {
        ...userData,
        id: nanoid(),
    };
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            const newUser = createUser(action.payload);
            state.user.push(newUser);
        },
        removeUser: (state, action: PayloadAction<string>) => {
            const userId = action.payload;
            state.user = state.user.filter(user => user.id !== userId);
        }
    }
});

export const selectUsers = (state: RootState) => state.users.user;

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;