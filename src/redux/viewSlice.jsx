import { createSlice } from "@reduxjs/toolkit"

const viewSlice = createSlice({
name:'view',
initialState :{
    view : [],
},

reducers:{
    addtoView:(state, action)=>{
        state.view.push(action.payload);
    },

  removefromView: (state, action) => {
  state.view = state.view.filter(x => x.id !== action.payload.id);
}

}}
)
export const{addtoView, removefromView} = viewSlice.actions;
export default viewSlice.reducer;
   
