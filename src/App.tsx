import './App.css'
import React, {lazy, Suspense} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Layout} from "./components/Layout.tsx";

const IndexPage = lazy(() => import('./pages/IndexPage'));
const FirstPage = lazy(() => import('./pages/FirstPage/FirstPage'));
const SecondPage = lazy(() => import('./pages/SecondPage/SecondPage'));

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Layout>
              <Route exact path='/' component={IndexPage} />
              <Route path='/FirstPage' component={FirstPage} />
              <Route path='/SecondPage' component={SecondPage} />
            </Layout>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App
