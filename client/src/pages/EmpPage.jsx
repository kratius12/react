import {useEffect} from 'react'
import EmpCard from '../components/EmpCard'
import {useEmp}  from '../context/EmpProvider.jsx'

function EmpPage() {
  const {Empleados, loadEmp} = useEmp();
  useEffect(()=>{
      
      loadEmp()
  },[]);
  function renderMain() {
    if(Empleados.length ===0){ return <h1>No hay empleados Aún</h1>;}
    return  Empleados.map(Empleado=>(<EmpCard Empleado={Empleado} key={Empleado.idEmp} />
    ))
  }

  return (
    <div>
      <h1 className='text-5xl text-white fond-bold text-center' >Empleados</h1>
      <div className="grid grid-cols-3 gap-2">
      {renderMain()}
      </div>
    </div>
  )
}

export default EmpPage