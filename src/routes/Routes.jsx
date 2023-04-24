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
        element: <Category />,
        loader: () => fetch(`http://localhost:5000/news`),
      },
      {
        path: '/categories/:id',
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: '/news',
    element: <NewsLayout />,
    children: [
      {
        path: '/news/:id',
        element: <News />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
