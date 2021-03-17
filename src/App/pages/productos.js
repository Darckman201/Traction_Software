import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "../assets/css/traction.css";
import Footer from '../footer';
import hero_mini from "../assets/img/hero_mini.svg";
import logo from "../assets/img/logopng.png";
import careta from "../assets/img/careta-dis.jpeg";
import contador from "../assets/img/Contador.jpeg";
import control from "../assets/img/controldeacceso.png";
import luz from "../assets/img/luz.jpg";
import matricial from "../assets/img/matricialdiag.jpeg";
import Navbar from '../navbar';


function Productos() {
    return (
        <div className="App">

        <Navbar/>

            <div className="page-hero-section bg-image hero-mini" style={{ backgroundImage: `url(${hero_mini})` }}>
                <div className="hero-caption">
                    <div className="container fg-white h-100">
                        <div className="row justify-content-center align-items-center text-center h-100">
                            <div className="col-lg-6">
                                <h3 className="mb-4 fw-medium">Productos</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="products-container" className="pb-5">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={careta} alt="card image" />
                                                </p>
                                                <h4 className="card-title">Careta Inteligente</h4>
                                                <div className="post-title">
                                                    <p>Para estos tiempos de pandemia, mantente a salvo</p>
                                                </div>
                                                <div className="entry-meta mb-2">
                                                    <div className="meta-item entry-author">
                                                        <div className="icon">
                                                            <span className="fas fa-user"></span>
                                                        </div>
                        Por <a href="#">Paola Rosales</a>
                                                    </div>
                                                    <div className="meta-item">
                                                        <div className="icon">
                                                            <span className="fas fa-filter"></span>
                                                        </div>
                        Categorías:
                        <a href="#">IOT</a>,
                        <a href="#">COVID-19</a>,
                        <a href="#">Sensores</a>
                                                    </div>
                                                    <div className="meta-item">
                                                        <div className="icon">
                                                            <span className="fas fa-tags"></span>
                                                        </div>
                                                        <a href="#">24 vendidos</a>
                                                    </div>
                                                </div>
                                                <a href="#" className="btn card-button btn-sm"><i className="fas fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Intelligent Mask</h4>
                                                <p className="card-text text-justify">Hoy en día se vive una pandemia mundial que impide el contacto
                                                físico directo, es por eso que con esta careta estarás prevenido para así diagnosticar cuál es tu
                                                temperatura corporal y saber cuando alguien se está acercando demasiado a ti, es una ¡excelente
                      opción!, contarás con garantía por un mes al adquirir el producto.</p>
                                                <button className="btn card-button">Comprar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Primer Producto --> */}
                        {/* <!-- Segundo Producto--> */}
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={contador} alt="card image" />
                                                </p>
                                                <h4 className="card-title">Contador de Monedas</h4>
                                                <div className="post-title">
                                                    <p>Comienza el hábito del ahorro con esta alcancía</p>
                                                </div>
                                                <div className="entry-meta mb-2">
                                                    <div className="meta-item entry-author">
                                                        <div className="icon">
                                                            <span className="fas fa-user"></span>
                                                        </div>
                        Por <a href="#">Pablo Córdova</a>
                                                    </div>
                                                    <div className="meta-item">
                                                        <div className="icon">
                                                            <span className="fas fa-filter"></span>
                                                        </div>
                        Categorías:
                        <a href="#">IOT</a>,
                        <a href="#">Dinero</a>,
                        <a href="#">Sensores</a>
                                                    </div>
                                                    <div className="meta-item">
                                                        <div className="icon">
                                                            <span className="fas fa-tags"></span>
                                                        </div>
                                                        <a href="#">32 vendidos</a>
                                                    </div>
                                                </div>
                                                <a href="#" className="btn card-button btn-sm"><i className="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Sunlimetech</h4>
                                                <p className="card-text">This is basic card with image on top, title, description and button.This is
                                                basic card with image on top, title, description and button.This is basic card with image on top,
                      title, description and button.</p>
                                                <button className="btn card-button">Comprar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Segundo Producto --> */}
                        {/* <!-- Tercer Producto --> */}
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={control} alt="card image" />
                                                </p>
                                                <h4 className="card-title">Acceso con RFID</h4>
                                                <div className="post-title">
                                                    <p>Manten una entrada segura gracias al RFID</p>
                                                </div>
                                                <div className="entry-meta mb-2">
                                                    <div className="meta-item entry-author">
                                                        <div className="icon">
                                                            <span className="fas fa-user"></span>
                                                        </div>
                        Por <a href="#">David Zamora</a>
                                                    </div>
                                                    <div className="meta-item">
                                                        <div className="icon">
                                                            <span className="fas fa-filter"></span>
                                                        </div>
                        Category:
                        <a href="#">IOT</a>,
                        <a href="#">Acceso</a>,
                        <a href="#">Sensores</a>
                                                    </div>
                                                    <div className="meta-item">
                                                        <div className="icon">
                                                            <span className="fas fa-tags"></span>
                                                        </div>
                                                        <a href="#">17 vendidos</a>
                                                    </div>
                                                </div>
                                                <a href="#" className="btn card-button btn-sm"><i className="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">FFFF</h4>
                                                <p className="card-text">FFF</p>
                                                <button className="btn card-button">Comprar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Tercer Producto  --> */}
                        {/* <!-- Cuarto Producto --> */}
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src={luz} alt="card image" />
                                                </p>
                                                <h4 className="card-title">Luz de Patio</h4>
                                                <div className="post-title">
                                                    <p>Toma el control de tu iluminación, en el patio de tu hogar</p>
                                                </div>
                                                <div className="entry-meta mb-2">
                                                    <div className="meta-item entry-author">
                                                        <div className="icon">
                                                            <span className="fas fa-user"></span>
                                                        </div>
                        Por <a href="#">Emanuel Saucedo</a>
                                                    </div>
                                                    <div className="meta-item">
                                                        <div className="icon">
                                                            <span className="fas fa-filter"></span>
                                                        </div>
                        Category:
                        <a href="#">IOT</a>,
                        <a href="#">Iluminación</a>,
                        <a href="#">Sensores</a>
                                                    </div>
                                                    <div className="meta-item">
                                                        <div className="icon">
                                                            <span className="fas fa-tags"></span>
                                                        </div>
                                                        <a href="#">84 vendidos</a>
                                                    </div>
                                                </div>
                                                <a href="#" className="btn card-button btn-sm"><i className="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">Sunlimetech</h4>
                                                <p className="card-text">This is basic card with image on top, title, description and button.This is
                                                basic card with image on top, title, description and button.This is basic card with image on top,
                      title, description and button.</p>
                                                <button className="btn card-button">Comprar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Cuarto Producto  --> */}
                        {/* <!-- Quinto Producto --> */}
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                {/* matricialdiag.jpeg */}
                                                <p><img className=" img-fluid" src={matricial} alt="card image" />
                                                </p>
                                                <h4 className="card-title">Cerradura Eléctrica</h4>
                                                <div className="post-title">
                                                    <p>Cerradura con teclado matricial para controlar accesos</p>
                                                </div>
                                                <div className="entry-meta mb-2">
                                                    <div className="meta-item entry-author">
                                                        <div className="icon">
                                                            <span className="fas fa-user"></span>
                                                        </div>
                        Por <a href="#">Axel Gurrola</a>
                                                    </div>
                                                    <div className="meta-item">
                                                        <div className="icon">
                                                            <span className="fas fa-filter"></span>
                                                        </div>
                        Category:
                        <a href="#">IOT</a>,
                        <a href="#">Acceso</a>,
                        <a href="#">Sensores</a>&nbsp;
                      </div>
                                                    <div className="meta-item">
                                                        <div className="icon">
                                                            <span className="fas fa-tags"></span>
                                                        </div>
                                                        <a href="#">26 vendidos</a>
                                                    </div>
                                                </div>
                                                <a href="#" className="btn card-button btn-sm"><i className="fa fa-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">LockD</h4>
                                                <p className="card-text text-justify">Una cerradura con dos controles de acceso que garantizara tu
                                                seguridad en cualquier lugar donde lo coloques, alertando con un sonido si el acceso fue concedido
                      o no.</p>
                                                <button className="btn card-button">Comprar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Quinto Producto --> */}


                    </div>
                </div>
            </section>



            <Footer/>


        </div >
    );
}

export default Productos;