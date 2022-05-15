import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { Home } from './layouts/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { WIP } from './layouts/WIP'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/wip" element={<WIP />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
