import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-zinc-700 flex justify-between px-10 py-2'>
        <h1>React mySQL</h1>
        <ul className='flex'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/NewEmp">Create Employee</Link>
            </li>
        </ul>
    </div>
  )
}
export default Navbar