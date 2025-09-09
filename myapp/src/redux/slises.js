import { createSlice } from "@reduxjs/toolkit";

const studentSlices = createSlice({
    name : "students",
    initialState : [],
    reducers : {
        addStudent : (state,action) =>{
            state.push(action.payload);
        },
        updateStudent : (state,action) =>{
            const { id, name ,age, subjects } = action.payload;
            const existing = state.find((student) => student.id === id);
            if(existing){
                existing.name = name;
                existing.age = age;
                existing.subjects = subjects;
            }
        },
        deleteStudent : (state,action) =>{
           return state.filter((student) => student.id !== action.payload);
        }
    }
})

export const  { addStudent,updateStudent,deleteStudent} = studentSlices.actions;
export default studentSlices.reducer;