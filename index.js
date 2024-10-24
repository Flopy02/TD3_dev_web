const express = require("express")
const app = express()
const port = 3000
const usersRouter = require("./routes/users.js")


//MIDDLEWARE
app.use(express.json())
//users endpoint
app.use("/api/", usersRouter)
//users endpoint
app.use("/api/",usersRouter)

app.listen(port,()=>{
    console.log('Server running at http://localhost:${port}')
})