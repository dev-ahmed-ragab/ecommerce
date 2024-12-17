import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//layouts
import MainLayout from '../layouts/MainLayout/MainLayout';

//pages
import Home from '../pages/Home';
import Products from '../pages/Products';
import Categories from '../pages/Categories';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Error from '../pages/Error';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      {
        path: 'products/:prefix',
        element: <Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== 'string' ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response('Bad Request', {
              statusText: 'Category not found',
              status: 400,
            });
          }
          return true;
        },
      },
      { path: 'categories', element: <Categories /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
