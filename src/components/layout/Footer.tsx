import { Link } from "react-router-dom";
import { Container } from "./Container";
import { Typography } from "../ui/Typography";

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GithubIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold font-heading">SER-PRO</span>
            </Link>
            <Typography variant="muted" className="mb-6">
              Consultoría tecnológica de alto nivel. Transformamos ideas en
              software robusto y escalable.
            </Typography>
            <div className="flex space-x-4 text-text-muted">
              <a href="#" className="text-text-muted hover:text-primary hover:scale-125 hover:-rotate-6 transition-all duration-300 transform inline-block">
                <TwitterIcon />
              </a>
              <a href="#" className="text-text-muted hover:text-primary hover:scale-125 hover:rotate-6 transition-all duration-300 transform inline-block">
                <LinkedinIcon />
              </a>
              <a href="#" className="text-text-muted hover:text-primary hover:scale-125 hover:-rotate-6 transition-all duration-300 transform inline-block">
                <GithubIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-6">Servicios</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li>
                <Link to="/servicios" className="hover:text-primary">
                  Backend Development
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-primary">
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-primary">
                  Quality Assurance Engineer
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-primary">
                  Testing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-6">Compañía</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li>
                <Link to="/nosotros" className="hover:text-primary">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-primary">
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-primary">
                  Contacto
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Carreras
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-text-muted">
              <li className="flex items-center space-x-2">
                <MailIcon />
                <span>servicio.consultoria.mx@gmail.com</span>
              </li>
              {/*<li>Cancun, Mexico</li>*/}
              {/* <li>[TELEFONO]</li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted">
          <p>
            © {new Date().getFullYear()} SER-PRO. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacidad" className="hover:text-primary">
              Privacidad
            </Link>
            <Link to="/terminos" className="hover:text-primary">
              Términos
            </Link>
            <Link to="/cookies" className="hover:text-primary">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
