import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="container navbar navbar-expand-sm bg-body-tertiary">
    <div className="container-fluid">
      <Link to='/' className="navbar-brand" >Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/tasks' className="nav-link" href="#">Tasks</Link>
          </li> 
          <li className="nav-item">
            <Link to='add-task' className="nav-link" href="#">Add-Task</Link>
          </li>         
        </ul>
        <div className="d-flex" role="search">
            <Link to='/login' className="btn btn-outline-dark  me-2" >Login</Link>
            <Link to='/register' className="btn btn-outline-dark" >Register</Link>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar