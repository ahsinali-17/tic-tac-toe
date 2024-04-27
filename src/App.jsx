import { useState } from 'react'
import './App.css'
import Player from './components/Player';
import Home from './components/Home';
import Computer from './components/Computer'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
function App() {
  let router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
   },
    {
       path:'/player',
       element:<Player/>
    },
    {
        path:'/computer',
        element:<Computer/>
    }
])
  return (
    <>
       <RouterProvider router={router}/>
    </>
  );
}
export default App;
