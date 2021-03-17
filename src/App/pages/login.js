import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "../assets/css/traction.css";
import "../assets/css/login.css";
import hero_mini2 from "../assets/img/hero_mini2.svg"
import logo from "../assets/img/logopng.png";
import Footer from '../footer';

function Login() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark navbar-floating" style={{ backgroundImage: `url(${hero_mini2})` }}>
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
                            <li className="nav-item active">
                                <Link to='/'>
                                    <a className="nav-link" >
                                        Inicio
                  </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/nosotros'>
                                    <a className="nav-link" >
                                        Nosotros
                  </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/productos'>
                                    <a className="nav-link" >
                                        Productos
                  </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contacto'>
                                    <a className="nav-link" >
                                        Contacto
                  </a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ml-auto my-2 my-lg-0">
                            <Link to="/login">
                                <button className="btn btn-primary rounded-pill">
                                    Iniciar Sesión
                    </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>


            <div style={{ backgroundColor: '#062345' }}>

                <div className="page-section">
                    <div className="container"></div>
                    <div className="container-login">
                        <div className="login-wrap">
                            <div className="login-html">
                                <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Iniciar
          Sesión</label>
                                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2"
                                    className="tab">Registrarse</label>
                                <div className="login-form">
                                    <form action="">
                                        <div className="sign-in-htm">
                                            <div className="group">
                                                <label for="user" className="label">Usuario</label>
                                                <input id="user" type="text" className="input" />
                                            </div>
                                            <div className="group">
                                                <label for="pass" className="label">Contraseña</label>
                                                <input id="pass" type="password" className="input" data-type="password" />
                                            </div>
                                            <div className="group">
                                                <input id="check" type="checkbox" className="check" checked />
                                                <label for="check"><span className="icon"></span>Mantenerme conectado</label>
                                            </div>
                                            <div className="group">
                                                <input type="submit" className="button" value="Iniciar Sesión" />
                                            </div>
                                            <div className="hr"></div>
                                            <div className="foot-lnk">
                                                <a href="#forgot">¿Olvidaste tu contraseña?</a>
                                            </div>
                                        </div>
                                    </form>
                                    <form action="">
                                        <div className="sign-up-htm">
                                            <div className="group">
                                                <label for="user" className="label">Usuario</label>
                                                <input id="user" type="text" className="input" />
                                            </div>
                                            <div className="group">
                                                <label for="pass" className="label">Contraseña</label>
                                                <input id="pass" type="password" className="input" data-type="password" />
                                            </div>
                                            <div className="group">
                                                <label for="pass" className="label">Correo electrónico</label>
                                                <input id="pass" type="text" className="input" />
                                            </div>
                                            <div className="group">
                                                <input type="submit" className="button" value="Registrarse" />
                                            </div>
                                            <div className="hr"></div>
                                            <div className="foot-lnk">
                                                <label for="tab-1">¿Ya tienes una cuenta?</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />



        </div>
    );
}

export default Login;