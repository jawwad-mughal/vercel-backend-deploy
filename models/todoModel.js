import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todoItem:{
        type: String,
        require: true
    },
    completed: { 
        type: Boolean, 
        default: false 
    },
})

const createTodo = mongoose.model("createTodo",todoSchema)

export default createTodo