const express = require('express');
const app = express();
const Employee = require('../models/EmployeesModels');

// GET employees

app.get('/emp/employees', async (req, res) => {
    
    try {
        const employees = await Employee.find({});
        res.status(201).json(employees);
    } catch (er){
        res.status(500).json({message:er.message});
    }
});

app.post('/emp/employees', async (req, res) => {
   
    const employee = new Employee(req.body);
   
    try {
        const save_employees = await employee.save();
        res.status(201).json(save_employees);
    }
    catch(er) {
        res.status(500).json({message:er.message});
    }
});

// GET employees by id

app.get('/emp/employees/:id', async (req, res) => {

    try {
        const employee = await Employee.findById(req.params.id);
        res.status(200).json(employee);
    } catch(er) {
        res.status(500).json({message:er.message});
    }
});

// PUT employees by id
// Update employees by id

app.put('/emp/employees/:id', async (req, res) => {

    try {
        const employee = await Employee.findById(req.params.id);
        
        if(req.body.first_name != null) 
        employee.first_name = req.body.first_name;
        
        if(req.body.last_name != null) 
            employee.last_name = req.body.last_name;
        
        if(req.body.email_id != null)
        employee.email_id = req.body.email_id;

        const updated_employee = await employee.save();
        res.status(200).json(updated_employee);
    } catch(er){
        res.status(500).json({message:er.message});
    }
});


// DELETE employees by id

app.delete('/emp/employees/:id', async (req, res) => {

    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        res.status(204).json(employee);
    } catch (er){
        res.status(500).json({message:er.message});
    }
});

module.exports = app;