import { createBrowserRouter } from 'react-router-dom';
import MainRoot from '../layout/MainRoot';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Career from '../Pages/Career/Career';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainRoot />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/career',
        element: <Career />,
      },
    ],
  },
]);

export default routes;
