import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Content from './Content';
import { YMaps } from '@pbe/react-yandex-maps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <YMaps>
        <Header />
        <Content />
    </YMaps>
    </div>
);

