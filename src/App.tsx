import './App.css'
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FirstPage, IndexPage, SecondPage} from "./pages";
import {Layout} from "./components/Layout.tsx";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path='FirstPage' element={<FirstPage />} />
            <Route path='SecondPage' element={<SecondPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
