import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout/Layout';
import Home from '../pages/Home/Home';
import Category from '../pages/Home/Category/Category';
import NewsLayout from '../pages/Layout/NewsLayout';
import News from '../pages/News/News/News';

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
        path: '/categories/:id',
        element: <Category />,
      },
    ],
  },
  {
    path: '/news',
    element: <NewsLayout />,
    children: [
      {
        path: ':id',
        element: <News />,
      },
    ],
  },
]);

export default router;
