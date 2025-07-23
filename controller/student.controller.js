//@method - GET
// @action - To get all list of available students or we can limit the count using querry like api\students?limit=5
exports.getAllStudents = async (req, res) => {
    console.log("API to get all Students (or) limited students from our system")
}

//@method - GET
// @action - To get a paricular students
exports.getStudent = async (req, res) => {
    console.log("API to get paricular Students in our system")
}

// @method - POST
// @action - To create a students record
exports.createStudent = async (req, res) => {
    console.log("API to create a students record in our system")
}

// @method - PUT
// @action - To Update a students record
exports.updateStudent = async (req, res) => {
    console.log("API to Update a Students in our system")
}

// @method - DELETE
// @action - To Delete a students record from our system
exports.deleteStudent = async  (req, res) => {
    console.log("API Delete a students record from our system")
}
