import './App.css'
import React from "react";
import {FirstPage, SecondPage} from "./pages";
import {
  BrowserRouter,
  Route,
  Link, Routes
} from "react-router-dom";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to={'/'}>index</Link></li>
            <li><Link to={'/FirstPage'}>FirstPage</Link></li>
            <li><Link to={'/SecondPage'}>SecondPage</Link></li>
          </ul>
          <div>
            <Routes>
              <Route path='/' element={'index'} />
              <Route path='/FirstPage' element={<FirstPage />} />
              <Route path='/SecondPage' element={<SecondPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
