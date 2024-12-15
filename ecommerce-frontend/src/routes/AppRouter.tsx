import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//layouts
import MainLayout from '../layouts/MainLayout/MainLayout';

//pages
import Home from '../pages/Home';
import Products from '../pages/Products';
import Categories from '../pages/Categories';
import Login from '../pages/Login';
import Register from '../pages/Register';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'products/:prefix', element: <Products /> },
      { path: 'categories', element: <Categories /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
