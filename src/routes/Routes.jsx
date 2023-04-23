import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout/Layout';
import Home from '../pages/Home/Home';
import CategoryNews from '../pages/CategoryNews/CategoryNews';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category/:id',
        element: <CategoryNews />,
      },
    ],
  },
]);

export default router;
