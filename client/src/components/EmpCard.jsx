/* eslint-disable react/prop-types */
import {useEmp} from '../context/EmpProvider.jsx'
import { useNavigate } from 'react-router-dom'

function EmpCard({Empleado}) {
    const {DeleteEmp, toggleEmpDone} = useEmp()
    const navigate = useNavigate();

    const handleDone = ()=>{
      toggleEmpDone(Empleado.idEmp)
    }


  return (
    <div className='bg-zinc-700 rounded-md p-4 text-white'>   
            <header className='flex justify-between '>
              <h2 className='text-sm font-bold'>{Empleado.nombre}</h2>
              <span>{Empleado.estado ==1 ? "✔️":"❌" }</span>
            </header>
              <p className='tex-xs'>{Empleado.cedula}</p>
              <p className='text-xs'>{Empleado.direccion}</p>
              <p className='text-xs'>{Empleado.telefono}</p>
            <div className='flex gap-x-1'>
              <button className='bg-yellow-500 px-2 py-1 text-white' onClick={()=> navigate(`/EditEmp/${Empleado.idEmp}`)}>Editar</button>
              <button className='bg-red-500 px-2 py-1 text-white' onClick={()=> DeleteEmp(Empleado.idEmp)}>Eliminar</button>
              <button className='bg-green-900 px-2 py-1 text-white' onClick={()=> handleDone(Empleado.estado)}>Toggle task</button>
            </div>
    </div>
  )
}

export default EmpCard