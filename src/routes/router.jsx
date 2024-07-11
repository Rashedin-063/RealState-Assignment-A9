import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import ErrorPage from '../error/ErrorPage';
import Home from '../pages/Home';
import UpdateProfile from '../pages/UpdateProfile';
import Login from '../pages/Login';
import Register from '../pages/Register';
import About from '../pages/About';
import PrivateRoute from './PrivateRoute';
import EstateDetails from '../pages/EstateDetails';
import Bookmark from '../pages/Bookmark';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/estate/:id',
        element: (
          <PrivateRoute>
            <EstateDetails />
          </PrivateRoute>
        ),
        loader: () => fetch('/data.json'),
      },
      {
        path: '/update',
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/bookmark',
        element: (
          <PrivateRoute>
            <Bookmark />
          </PrivateRoute>
        ),
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;
