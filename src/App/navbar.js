import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/traction.css";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from "./assets/img/logopng.png";

function Navbar (){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-floating">
                <div className="container">
                    <Link to='/'>
                        <a className="navbar-brand" href="index.html">
                            <img
                                src={logo}
                                className="trans-logo"
                                alt=""
                                height="90"
                                width="100"
                            />
                        </a>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggler"
                        aria-controls="navbarToggler"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
                            <li className="nav-item">
                                <Link to='/'>
                                    <a className="nav-link" >
                                        Inicio
                  </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/nosotros'>
                                    <a className="nav-link">
                                        Nosotros
                  </a>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/productos'>
                                    <a className="nav-link" >
                                        Productos
                  </a>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contacto'>
                                    <a className="nav-link" >
                                        Contacto
                  </a>
                                </NavLink>
                            </li>
                        </ul>
                        <div className="ml-auto my-2 my-lg-0">
                            <NavLink to="/login">
                                <button className="btn btn-primary rounded-pill">
                                    Iniciar Sesión
                    </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;