import React from 'react';
import ReactDOM from 'react-dom/client';
import Global_style from './global_style';
import Routes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<> 
    <Routes />
    <Global_style /></>);
