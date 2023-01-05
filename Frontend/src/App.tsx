import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import Login from './Pages/Login';
import UsersPage from './Pages/UsersPage';
import CatsPage from './Pages/CatsPage';
import DogsPage from './Pages/DogsPage';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/users",
      element: <UsersPage />
    },
    {
      path: "/cats",
      element: <CatsPage />
    }, 
    {
      path: "/dogs",
      element: <DogsPage />
    },
    // {
    //   path: "/friends",
    //   element: <Friends />
    // },

  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
