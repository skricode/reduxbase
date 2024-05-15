import { createSlice } from "@reduxjs/toolkit"


const todoState = {
    list:[]
}

const todoSlice = createSlice({
    name:'todo',
    initialState:todoState,
    reducers:{
        addDataInList : (state, action) =>{
            console.log(action);
            state.list.push(action.payload); //getting data in payload so we pass
        }
    }
})

// console.log(todoSlice);

export const {addDataInList} = todoSlice.actions

export default todoSlice.reducer