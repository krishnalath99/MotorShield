import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HeroHome from './Components/Hero/HeroHome';
import MainPage from './Components/MainPage/MainPage';
import SignInForm from './Components/SignInForm/SignInForm';
import Menu from './Components/Menu/Menu';
import PolicyMenu from './Components/Menu/PolicyMenu';
import ClaimMenu from './Components/Menu/ClaimMenu';
import SignUpForm from './Components/SignUpForm/SignUpForm';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        index:true,
        element: <HeroHome />
      },
      {
        path: '/signup',
        element: <SignUpForm />
      },
      {
        path:'/login',
        element: <SignInForm />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/policy-menu',
        element: <PolicyMenu />
      },
      {
        path: '/claim-menu',
        element: <ClaimMenu />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App