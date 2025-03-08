import {createSlice} from "@reduxjs/toolkit"

const initialState = {
     
    count: 11,
}

const testSlice = createSlice({
    name: 'test',

    initialState,

    reducers: {
        multiply: (state)=>{
             state.count = state.count * 5;       
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
          },
    }
})

export const {multiply, incrementByAmount} = testSlice.actions;

export default testSlice.reducer;