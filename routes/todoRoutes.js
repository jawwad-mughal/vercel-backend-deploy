import express from "express" 
import {createTodo,getTodos,updateTodo,deleteTodo} from "../controllers/todoControllers.js"

const route = express.Router()

route.get("/",getTodos)

route.post("/",createTodo)

route.put('/:id',updateTodo)

route.delete('/:id',deleteTodo)

export default route