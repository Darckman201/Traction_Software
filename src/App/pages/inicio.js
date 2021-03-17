
import {Link} from 'react-router-dom';
import "../assets/css/traction.css";
import "../footer"
import fondo from "../assets/img/fondo-header.svg";
import equipo from "../assets/img/equipo.png";
import ti from "../assets/img/ti.png";
import Navbar from "../navbar"
import Footer from '../footer';

function Inicio() {
  return (
    <div className="Inicio">
        <Navbar/>
      <div
      // Para poner una imagen dentro de un  style se tiene que utilizar " ` ó alt+96"
        className="page-hero-section bg-image hero-home-2"
        style={{backgroundImage: `url(${fondo})`}}
        // style={{backgroundColor: 'blue'}} 
      >
        <div className="hero-caption">
          <div className="container fg-white h-100">
            <div className="row align-items-center h-100">
              <div className="col-lg-6 wow fadeInUp">
                <div className="badge badge-soft mb-2">
                  #1 En Soluciones Tecnológicas
                </div>
                <h1 className="mb-4 fw-normal">Traction Software</h1>
                <p className="mb-4">Innovando y desarrollando el futuro</p>
                <Link to="/productos">
                <a href="#" className="btn btn-primary">
                  Ver productos
                </a>
                </Link>
              </div>
              <div className="col-lg-6 d-none d-lg-block wow zoomIn">
                <div className="img-place mobile-preview shadow floating-animate">
                  <img src={equipo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section no-scroll">
        <div className="container">
          <h2 className="text-center wow fadeIn">Nuestras características</h2>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 py-3 wow fadeInLeft">
                  <div className="card card-body border-0 text-center shadow pt-5">
                    <div className="svg-icon mx-auto mb-4">
                      <i className="fas fa-file-invoice"></i>
                    </div>
                    <h5 className="fg-gray">Pago Seguro</h5>
                    <p className="fs-small">
                      En nuestra empresa nos encargamos de cumplir con la mayor
                      seguridad para que tu pago no sufra afectaciones de
                      terceros
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
                  <div className="card card-body border-0 text-center shadow pt-5">
                    <div className="svg-icon mx-auto mb-4">
                      <i className="far fa-lightbulb"></i>
                    </div>
                    <h5 className="fg-gray">Adaptabilidad</h5>
                    <p className="fs-small">
                      Nos encargaremos de desarrollar lo que necesites, nos
                      adaptamos a cualquier idea y presupuesto con el que
                      cuentes
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 py-3 wow fadeInRight">
                  <div className="card card-body border-0 text-center shadow pt-5">
                    <div className="svg-icon mx-auto mb-4">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <h5 className="fg-gray">Concepto</h5>
                    <p className="fs-small">
                      Nuestro principal objetivo es contar con clientes
                      satisfechos, por eso se crea un concepto único para cada
                      uno según lo requerido
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fondo-modif page-section no-scroll">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 wow fadeIn">
              <div className="size-img">
                <img src={ti} alt="" />
              </div>
            </div>
            <div className="col-lg-5 pl-lg-5 wow fadeInUp">
              <h2 className="mb-4 text-dark">
                Soluciones de Tecnologías de la Información
              </h2>
              <p className="mb-4">
                Resolvemos situaciones relacionadas a Redes, Desarrollo móvil y
                web, Bases de datos, Testing, Internet de las cosas, ¡y mucho
                más!
              </p>
              <a href="#" className="btn btn-primary rounded-pill">
                Sobre nosotros
              </a>
            </div>
          </div>
        </div>
      </div>
        
    <Footer/>
    </div>
  );
}

export default Inicio;
