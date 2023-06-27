import {Routes, Route} from 'react-router-dom'
import EmpPage from './pages/EmpPage.jsx'
import EmpForm from './pages/EmpForm.jsx'
import NotFound from './pages/NotFound.jsx'
import Navbar from  './components/Navbar.jsx'
import {EmpContextProvider}  from './context/EmpProvider.jsx'

function App() {
  return (
    <div className='bg-zinc-900 h-screen px-10'>
      <Navbar/>
      <div className='container mx-auto py-4'>
      <EmpContextProvider>
      <Routes>
      <Route path='/' element={<EmpPage/>} />
      <Route path='/NewEmp' element={<EmpForm/>} />
      <Route path='/EditEmp/:id' element={<EmpForm/>}></Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </EmpContextProvider>
      </div>
    </div>
  )
}

export default App