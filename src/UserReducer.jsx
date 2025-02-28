import {createSlice } from "@reduxjs/toolkit";
import { userList} from "./Data";


const userSlice = createSlice({


    name: "users",
    initialState: userList,
    reducers:{
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const userIndex = state.findIndex(user => user.id === String(id)); // Ensure id is a string
        
            if (userIndex !== -1) {
                state[userIndex] = { ...state[userIndex], name, email };
            } else {
                console.log("User not found!");
            }
        },
        
        
        

        deleteUser: (state, action) => {
            const {id} = action.payload;
            const uu = state.find(user => user.id === id );
            if (uu){
                return state.filter(f => f.id !== id);
            }
        }

    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer;