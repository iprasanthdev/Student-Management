const express = require('express')
const app = express()
const studentsRoutes = require('./routes/student.routes')
const PORT = process.env.PORT || 8000


app.use('/api/students', studentsRoutes)

app.listen(PORT, () => {
    console.log(`Successfully created server at port ${PORT}`)
})