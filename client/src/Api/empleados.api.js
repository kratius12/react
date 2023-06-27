import axios from 'axios'

export const getEmpsRequest = async ()=>
    await axios.get("http://localhost:4000/emp");


export const createEmpRequest = async (empleado)=>
    await axios.post('http://localhost:4000/emp',empleado)

export const deteEmpRequest = async (idEmp)=>
    await axios.delete(`http://localhost:4000/emp/${idEmp}`)

export const getEmpRequest = async(idEmp)=>
    await axios.get(`http://localhost:4000/emp/${idEmp}`)

export const updateEmpRequest = async(idEmp, newFile)=>
    await axios.put(`http://localhost:4000/emp/${idEmp}`,newFile)

export const toggleEmpDoneRequest = async(idEmp,estado)=>
    await axios.put(`http://localhost:4000/emp/${idEmp}`,{estado})