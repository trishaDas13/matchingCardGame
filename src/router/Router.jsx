import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import StartPage from '../pages/startPage/StartPage';
import NextPage from '../pages/nextPage/NextPage';
import SecondNext from '../pages/secondNext/SecondNext';
import Instruction from '../pages/instruction/Instruction';
import Game from '../pages/game/Game';

const Router = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element: <StartPage />,
        },
        {
            path: '/next',
            element: <NextPage />,
        },
        {
            path: "/secondNext",
            element: <SecondNext />,
        },
        {
            path: "/instruction",
            element: <Instruction/>
        },
        {
            path: "/game",
            element: <Game/>
        }
        
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default Router