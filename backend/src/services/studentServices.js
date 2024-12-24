const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addStudent = async (data) =>{
    try{
        const newStudent = await prisma.user.create({
            data
        })
        return newStudent
    } catch(error){
        console.log(error)
    }
}

const getStudents = async () => {
    try{
        const students = await prisma.user.findMany({})
        return students
    } catch(error){
        console.log(error)
    }
}

const getStudentById = async (id) => {
    try{
        const student = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        return student
    } catch(error){
        console.log(error)
    }
}

const updateStudent = async (id, data) => {
    try{
        const updatedStudent = await prisma.user.update({
            where: {
                id: id
            },
            data
        })
        return updatedStudent
    } catch(error){
        console.log(error)
    }
}

const deleteStudent = async (id) => {
    try{
        const deletedStudent = await prisma.user.delete({
            where: {
                id: id
            }
        })
        return deletedStudent
    } catch(error){
        console.log(error)
    }
}

module.exports = {
    addStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
}