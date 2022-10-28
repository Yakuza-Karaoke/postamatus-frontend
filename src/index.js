import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Header from './Header';
import Content from './Content';
import {YMaps} from '@pbe/react-yandex-maps';

const mainPage = <>
    <YMaps>
        <Header/>
        <Content/>
    </YMaps>
</>

const router = createBrowserRouter([
    {
        path: "/",
        element: mainPage,
    },
    {
        path: "/admin",
        element: <h1>Админка</h1>
    },
    {
        path: "/*",
        element: <h1>404 СТРАНИЦА НЕ НАЙДЕНА</h1>
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <RouterProvider router={router}/>
    </div>
);

