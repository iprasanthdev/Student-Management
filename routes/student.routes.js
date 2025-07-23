const express = require("express")
const router = express.Router()
const studentController = require('../controllers/student.controller')


// @method - GET
// @action - To get all list of available students or we can limit the count using querry like api\students?limit=5
router.get('/', studentController.getAllStudents)

// @method - GET
// @action - To get a paricular students
router.get('/:id', studentController.getStudent)

// @method - POST
// @action - To create a students record
router.post('/', studentController.createStudent)

// @method - PUT
// @action - To Update a students record
router.put('/:id', studentController.updateStudent)

// @method - DELETE
// @action - To Delete a students record from our system
router.delete('/:id', studentController.deleteStudent)

module.exports = router;