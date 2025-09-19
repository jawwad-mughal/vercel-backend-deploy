import express from "express"
import cors from "cors"
import dbConnect from "./config/dbConfig.js"
import todoRoute from "./routes/todoRoutes.js"
import dotenv from "dotenv"
dotenv.config()



const PORT = process.env.PORT || 6000
const app = express()

app.use(cors())
// DB connection 
dbConnect()

app.use(express.json())

// Routing
app.use("/",todoRoute)

// server starting

app.listen(PORT,() => {
    console.log(`Server Starting PORT: ${PORT}`)
})




