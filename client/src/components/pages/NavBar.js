import React from "react"
import { Link } from "react-router-dom"
import logoNoBackground from '../../assets/logoNoBackground.png'
import "../../styles/App.css"

function Navbar({
  onLogOut,
  currentUser,
}) {

  function handleLogOut() {
    fetch('/logout', {
        method: 'DELETE'
    })
        .then(() => onLogOut())
  }
  
  const logo = logoNoBackground
  

  return (
    <nav className="navbar-container">
          <ul className="nav-links">
            
            <a href="/" to="/">
              <img className="nav-logo" src={logo} title="Home" alt="navLogo"></img>
            </a>
            <li>          
              <a className="nav-item"href="/management/contracts" to="/management/contracts">Contracts</a>
            </li>
            <li>
              <a className="nav-item"href="/management/projects" to="/management/projects">Projects</a>
            </li>
            <li>
              <a className="nav-item"href="/management/client_companies" to="/management/client_companies">Companies</a>
            </li>
            <li>
              <a className="nav-item"href="/management/clients" to="/management/clients">Clients</a>
            </li>
            <li>
              <a className="nav-item"href="/hris/employees" to="/hris/employees">Employees</a>
            </li>
            <li>
              <a className="nav-item"href="/hris/subcontractors" to="/hris/subcontractors">Subcontractors</a>
            </li>
            <li>
              <a className="nav-item"href="/matrix/skills" to="/matrix/skills">Skills</a>
            </li>
            {/* <li>
              <a className="nav-item"href="/users/" to={`/users/${currentUser.id}`}>Accounts</a>
            </li> */}
            <li>
              <a className="nav-item"href="/" to="/logout" onClick={handleLogOut}>Log Out</a>
            </li>
            <li>
              <a className="nav-item"href="/login" to="/login">Login</a>
            </li>
            <li>
              <a className="nav-item"href="/register" to ="/register">Register</a>
            </li>
          </ul>
    </nav>
  )
}
  export default Navbar