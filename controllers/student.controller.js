const Student = require('../models/Student.model')

//@method - GET
// @action - To get all list of available students or we can limit the count using querry like api\students?limit=5
exports.getAllStudents = async (req, res) => {
    console.log("API to get all Students (or) limited students from our system")
    try {
        const students = await Student.find()
        students.length > 0 ?  res.status(201).json(students) : res.status(201).json({message: "The are no student created right now"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//@method - GET
// @action - To get a paricular students
exports.getStudent = async (req, res) => {
    console.log("API to get paricular Students in our system")
    try {
        const id = req.params.id
        const student = Student.findById(id)
        res.status(201).json(student)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// @method - POST
// @action - To create a students record
exports.createStudent = async (req, res) => {
    console.log("API to create a students record in our system")
    try {
        const { name, email, age} = req.body
        if(name && email && age){
            const student = new Student({
                name,
                email,
                age
            })
            const saved = await student.save()
            res.status(201).json(saved)
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }

}

// @method - PUT
// @action - To Update a students record
exports.updateStudent = async (req, res) => {
    console.log("API to Update a Students in our system")
    try {
        const id = req.params.id
        console.log("id =>", id)
        console.log("body => ", req.body)
        const updated = await Student.findByIdAndUpdate(id, req.body, {new: true})
         res.status(201).json(updated)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

// @method - DELETE
// @action - To Delete a students record from our system
exports.deleteStudent = async  (req, res) => {
    console.log("API Delete a students record from our system")
    try {
        const id = req.params.id
        const deleted = await Student.findByIdAndDelete(id)
         res.status(201).json(deleted)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
