const studentService = require('../services/studentServices');

const addStudent = async (req, res) => {
    try {
        const newStudent = await studentService.addStudent(req.body);
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await studentService.getStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getStudentById = async (req, res) => {
    try {
        const student = await studentService.getStudentById(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const updatedStudent = await studentService.updateStudent(req.params.id, req.body);
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        await studentService.deleteStudent(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
};