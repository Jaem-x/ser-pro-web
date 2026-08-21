import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Servicios from '../pages/Servicios';
import Nosotros from '../pages/Nosotros';
import Contacto from '../pages/Contacto';
import Privacidad from '../pages/Privacidad';
import Terminos from '../pages/Terminos';
import Cookies from '../pages/Cookies';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'servicios', element: <Servicios /> },
      { path: 'nosotros', element: <Nosotros /> },
      { path: 'contacto', element: <Contacto /> },
      { path: 'privacidad', element: <Privacidad /> },
      { path: 'terminos', element: <Terminos /> },
      { path: 'cookies', element: <Cookies /> },
    ]
  },
], { basename: '/ser-pro-web' });
