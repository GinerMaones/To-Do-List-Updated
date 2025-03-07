
import {createSlice } from "@reduxjs/toolkit";
import { userList} from "../Presentation/Data";


const userSlice = createSlice({


    name: "users",
    initialState: userList,
    reducers:{
        addUser: (state, action) => {
            const newUser = { ...action.payload, id: String(action.payload.id) }; // Ensure ID is a string
            state.push(newUser);
        },
        
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            
            // Convert all IDs to the same type for consistency
            const userIndex = state.findIndex(user => String(user.id) === String(id)); 
        
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
