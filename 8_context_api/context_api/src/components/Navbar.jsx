import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      {/* <Link to='/'>Home</Link>
      <Link to='/contact'>Contact</Link> */}
      <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
      <NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : '')}>Contato</NavLink>
    </div >
  )
}

export default Navbar