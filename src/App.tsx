import './App.css'
import React, {lazy, Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout.tsx";

const IndexPage = lazy(() => import('./pages/IndexPage'));
const FirstPage = lazy(() => import('./pages/FirstPage/FirstPage'));
const SecondPage = lazy(() => import('./pages/SecondPage/SecondPage'));

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path='FirstPage' element={<FirstPage />} />
              <Route path='SecondPage' element={<SecondPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
