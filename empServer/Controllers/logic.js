
const employees = require("../models/emsModel");

// all logic

// register logic

  employeeRegister = async (req, res) => {
    const file = req.file.filename
    const { fname, lname, email, mobile, gender, status, location } = req.body

    if(!fname || !lname || !email || !mobile || !gender || !status || !location){
        res.status(404).json("All inputs are required")
    }

    try {
        const preEmployee = await employees.findOne({ email })

        if (preEmployee) {
            res.status(403).json("employee already present")
        }
        else {
            // create obiject for new employees
            const newEmployee = new employees({ fname, lname, email, mobile, gender, status, profile: file, location })
            await newEmployee.save()

            res.status(200).json(newEmployee)
        }
    }
    catch {
        res.status(400).json("logic error")
    }


}
module.exports={employeeRegister}