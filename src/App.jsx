import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import RootLayout from './Pages/RootLayout';
import HeroHome from './Components/Hero/HeroHome';
import MainPage from './Components/MainPage/MainPage';
import SignInForm from './Components/SignInForm/SignInForm';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
        children: [
          {
            index:true,
            element: <HeroHome />
          },
          {
            path:'/login',
            element: <SignInForm />
          }
        ]
      }

    ]
  }
])

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App