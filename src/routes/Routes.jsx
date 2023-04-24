import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout/Layout';
import Home from '../pages/Home/Home';
import Category from '../pages/Home/Category/Category';
import NewsLayout from '../pages/Layout/NewsLayout';
import News from '../pages/News/News/News';
import LoginLaytou from '../pages/Layout/LoginLaytou';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLaytou />,
    children: [
      {
        path: '/',
        element: <Navigate to="/categories/0"></Navigate>,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/categories',
    element: <Layout />,
    children: [
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
