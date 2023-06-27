import {  useContext, useState } from "react";
import { createEmpRequest, 
    deteEmpRequest, 
    getEmpsRequest, 
    getEmpRequest, 
    updateEmpRequest,
    toggleEmpDoneRequest} from "../Api/empleados.api";
import {EmpContext} from './EmpContext.jsx'



// eslint-disable-next-line react-refresh/only-export-components
export const useEmp = () =>{
    const context =  useContext(EmpContext)
    if(!context){
        throw new Error("useEmp must be used within a EmpContextProvider");
    }
    return context
}


// eslint-disable-next-line react/prop-types
export const EmpContextProvider = ({ children })=>{
    const [Empleados, setEmpleados] = useState([]);
    async  function loadEmp(){
        const response = await getEmpsRequest()
        setEmpleados(response.data)
        }
      const DeleteEmp = async (idEmp)=>{
        try{
        // eslint-disable-next-line no-unused-vars
        const response = await deteEmpRequest(idEmp);
            setEmpleados( Empleados.filter(Empleado=>Empleado.idEmp !==idEmp))
        }catch(error){
            console.log(error)
        }
        }
    const createEmp = async(Empleado)=>{
    try{
        // eslint-disable-next-line no-unused-vars
        const response = await createEmpRequest(Empleado)
        // setEmpleados([...Empleados,response.data])
        }catch(error){
            console.error(error)
        }
        }
    const getEmp = async (idEmp)=>{
        try{
            const response = await getEmpRequest(idEmp)
            return response.data;
        }catch(error){
            console.error(error)
        }
        }
    const updateEmp = async (idEmp, newFiles)=>{
        try{
        const response = await updateEmpRequest(idEmp,newFiles);
        console.log(response)
        }catch(error){
            console.error(error)
        }
        }
    const toggleEmpDone = async (id)=>{
        try{
        const EmpFound = Empleados.find((Empleado)=>Empleado.idEmp==id)
        await toggleEmpDoneRequest(id,EmpFound.estado ===0 ? 1:0)
        setEmpleados(
            Empleados.map((empleado)=>
            // eslint-disable-next-line no-undef
            empleado.idEmp=== id? {...empleado, estado :!empleado.estado}: Empleado
        ));
        }catch(error){
            console.log(error)
        }
    }
    return (
    <EmpContext.Provider value={({Empleados, loadEmp,DeleteEmp, createEmp,getEmp, updateEmp,toggleEmpDone})}>
        {children}
    </EmpContext.Provider>);
}