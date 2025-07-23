const express = require('express')
const app = express()
const cors = require('cors')
const studentsRoutes = require('./routes/student.routes')
const connectDB = require('./db/config')
const PORT = process.env.PORT || 8000

// For parsing the boady data we use esxpress.json also we can use third party middleware called body-parser
app.use(express.json())

// For parsing the form data we can use urlecoded midleware
app.use(express.urlencoded({extended: true}))

//Third party middieware used here
app.use(cors())

// Mongodb connection established here
connectDB();

// Routes that connect to student actions 
app.use('/api/students', studentsRoutes)

app.listen(PORT, () => {
    console.log(`Successfully created server at port ${PORT}`)
})