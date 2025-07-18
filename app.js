const express = require('express')
const sequelize = require('./config/database')
const tasksRoutes = require('./routes/taskRoutes')

const app = express()
app.use(express.json())

app.use('/tasks', tasksRoutes)

sequelize.sync().then(() => {
    console.log("Database synced")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running")
})