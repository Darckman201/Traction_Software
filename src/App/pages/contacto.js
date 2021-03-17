import { Link } from 'react-router-dom';
import "../assets/css/traction.css";
import logo from "../assets/img/logopng.png";
import hero_mini from "../assets/img/hero_mini.svg"
import Navbar from "../navbar";
import Footer from '../footer';


function Contacto() {
    return (
        <div className="App">
           <Navbar/>

            <div className="bg-light">
                {/* hero_mini.svg */}
                <div className="page-hero-section bg-image hero-mini" style={{backgroundImage: `url(${hero_mini})`}} >
                    <div className="hero-caption">
                        <div className="container fg-white h-100">
                            <div className="row justify-content-center align-items-center text-center h-100">
                                <div className="col-lg-6">
                                    <h3 className="mb-4 fw-medium">Contacto</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="page-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 my-3 wow fadeInUp">
                                <div className="card-page">
                                    <div className="row row-beam-md">
                                        <div className="col-md-4 text-center py-3 py-md-2">
                                            <i class="fas fa-map-marker-alt h3"></i>
                                            <p className="fg-primary fw-medium fs-vlarge">Ubicación:</p>
                                            <p className="mb-0">Durango - Mezquital, 34308 Gabino Santillán, Dgo.</p>
                                        </div>
                                        <div className="col-md-4 text-center py-3 py-md-2">
                                            <i class="fas fa-phone-alt h3"></i>
                                            <p className="fg-primary fw-medium fs-vlarge">Contacto</p>
                                            <a id="tels" className="mb-1" href="tel:+526181654112">+526181654112</a>
                                            <br/>
                                                <a id="tels" className="mb-1" href="tel:+526182349653">+526182349653</a>
                                        </div>
                                            <div className="col-md-4 text-center py-3 py-md-2">
                                                <i class="fas fa-envelope-open-text h3"></i>
                                                <p className="fg-primary fw-medium fs-vlarge">Correo</p>
                                                <a id="email" href="mailto:tractionsoftware@gmail.com" className="mb-1">tractionsoftware@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-7 my-3 wow fadeInUp">
                                    <div className="card-page">
                                        <div className="maps-container">
                                            <div id="myMap">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.1600931505254!2d-104.61976948569816!3d23.99012318549458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bb833da45df2b%3A0x2392fefbf317535!2sUniversidad%20Tecnol%C3%B3gica%20de%20Durango!5e0!3m2!1ses!2smx!4v1612813492122!5m2!1ses!2smx" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <Footer/>


            </div>
        
  );
}

export default Contacto;
