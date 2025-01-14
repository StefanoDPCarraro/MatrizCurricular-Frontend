import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={<>{route.component}</>} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default Router