import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Women from './pages/Women';
import Newarrival from './pages/Newarrival';
import './App.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/women",
    element: <Women />,
  },
  {
    path: "/Newarrival",
    element: <Newarrival />,
  },
]) //added a path for our route



function App() {
  return (
    <RouterProvider router={router} /> //wrapped our component(s) in the React router provider.

    );
}

export default App;
