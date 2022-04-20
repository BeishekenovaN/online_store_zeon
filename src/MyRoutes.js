import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Mynavbar from './Components/Header/Mynavbar';

export default function MyRoutes() {
    return (
        <BrowserRouter>
             <Mynavbar/>
        </BrowserRouter>
    );
};
