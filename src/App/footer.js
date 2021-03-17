import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/traction.css";
import logo_footer from "./assets/img/logo.png";

function Footer (){
    return (
        <div className="footer-bg page-footer-section fg-white">
        <div className="container mb-5">
          <div className="row justify-content-center text-center wow fadeInUp">
            <div className="col-lg-8">
              <div className="text-center mb-3">
                <img src={logo_footer} alt="" height="80" />
              </div>
              <h3 className="mb-3">
                <span className="traction">Traction</span> Software
              </h3>

              <ul className="nav justify-content-center py-3">
                <li className="nav-item">
                  <a href="index.html" className="nav-link fg-white px-4">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link fg-white px-4">
                    --------
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link fg-white px-4">
                    --------
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link fg-white px-4">
                    --------
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link fg-white px-4">
                    --------
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center mt-4 wow fadeIn">
          Copyright &copy; 2021{" "}
          <a className="fg-white fw-medium">Traction Software</a>. Todos los
          derechos reservados
        </p>
      </div>

    );
}

export default Footer;