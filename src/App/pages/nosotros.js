import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/traction.css";
import Footer from '../footer';
import hero_mini from "../assets/img/hero_mini.svg";
import Navbar from "../navbar";
import axel from "../assets/img/equipo/person_1.png";
import ema from "../assets/img/equipo/person_1.png";
import pablo from "../assets/img/equipo/person_2.png";
import paola from "../assets/img/equipo/person_3.png";
import david from "../assets/img/equipo/person_2.png";

function Nosotros() {
    return (
        <div className="App">
          <Navbar/>
            <main className="bg-light">
                {/* hero_mini.svg */}
                <div className="page-hero-section bg-image hero-mini" style={{ backgroundImage: `url(${hero_mini})` }}>
                    <div className="hero-caption">
                        <div className="container fg-white h-100">
                            <div className="row justify-content-center align-items-center text-center h-100">
                                <div className="col-lg-6">
                                    <h3 className="mb-4 fw-medium">Nosotros</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-section pt-5">


                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-sm-6">
                                <div className="contenedor-misvis card-page text-center">
                                    <i className="fas fa-chart-line"></i>
                                    <h5 className="traction font-weight-bold text-center">Misión</h5>
                                    <hr />
                                    <p className="text-justify">En Traction Software se busca ofrecer un servicio de calidad e innovador a los
                                    clientes que
                requieran de soluciones tecnológicas.</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className=" contenedor-misvis card-page text-center">
                                    <i className="far fa-thumbs-up"></i>
                                    <h5 className="traction font-weight-bold text-center">Visión</h5>
                                    <hr />
                                    <p className="text-justify">Para el 2023 ser una de las empresas más reconocidas a nivel nacional para brindar
                                    servicios de
                                    Tecnologías de la Información de manera presencial y remota, a través de un proceso constante para
              mejorar la calidad de los servicios que se proporcionan.</p>
                                </div>
                            </div>
                        </div>

                        <div className="card-page mt-3">
                            <h5 className="traction">Conoce nuestro equipo</h5>
                            <hr />

                            <div className="row justify-content-center">
                                <div className="col-lg-4 py-3">
                                    <div className="team-item">
                                        <div className="team-avatar">
                                            <img src={axel} alt="" />
                                        </div>
                                        <h5 className="team-name">Axel Gurrola</h5>
                                        <span className="fg-gray fs-small">Creative Director</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 py-3">
                                    <div className="team-item">
                                        <div className="team-avatar">
                                            <img src={david} alt="" />
                                        </div>
                                        <h5 className="team-name">David Zamora</h5>
                                        <span className="fg-gray fs-small">Creative Director</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 py-3">
                                    <div className="team-item">
                                        <div className="team-avatar">
                                            <img src={ema} alt="" />
                                        </div>
                                        <h5 className="team-name">Emanuel Saucedo</h5>
                                        <span className="fg-gray fs-small">Creative Director</span>
                                    </div>
                                </div>
                                <div className="col-lg-5 py-3">
                                    <div className="team-item">
                                        <div className="team-avatar">
                                            <img src={pablo} alt="" />
                                        </div>
                                        <h5 className="team-name">Pablo Córdova</h5>
                                        <span className="fg-gray fs-small">UI/UX Designer</span>
                                    </div>
                                </div>
                                <div className="col-lg-5 py-3">
                                    <div className="team-item">
                                        <div className="team-avatar">
                                            <img src={paola} alt="" />
                                        </div>
                                        <h5 className="team-name">Paola Rosales</h5>
                                        <span className="fg-gray fs-small">Product Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


   <Footer/>
        </div>
  );
}

export default Nosotros;
