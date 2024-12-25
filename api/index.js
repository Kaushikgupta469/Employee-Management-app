const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://kaushik:173314@cluster0.lrx2p.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to Mongo DB")
}).catch((error) => {
    console.log("Error connecting to Mongo DB", error)
});

app.listen(port, () => {
    console.log("Server is running on port 8000")
});

const Employee = require("./models/employee");
const Attendance = require("./models/attendance");

//End point to register an Employee
app.post("/addEmployee", async (req, res) => {
    try {
        const { employeeName, employeeId, designation, phoneNumber, dateOfBirth, joiningDate, activeEmployee, salary, address, createdAt } = req.body;

        //create a new Employee
        const newEmployee = newEmployee({
            employeeName, employeeId, designation, phoneNumber, dateOfBirth, joiningDate, activeEmployee, salary, address, createdAt
        });

        await newEmployee.save();
        res.status(201).json({ message: "Employee saved successfully", employee: newEmployee });
    } catch (error) {
        console.log("Error creating Employee", error);
        res.status(500).json({ message: "Failed to add an Employee " });
    }
});

//endpoint to fetch all of the Employee
app.get("/employees", async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve the Employees" });
    }
});