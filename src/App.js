
import './App.css';
import NavBar from './components/navBar/NavBar';
import Converter from './features/converter/Converter';
import ExchangeRate from './features/exchangeRate/ExchangeRate';
import { Route, Switch } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getRates } from './AppSlice'
import React, { useEffect } from 'react'
import {converter} from './features/converter/converterSlice'
function App() {

  const dispatch = useDispatch()
  const baseCurrency = useSelector(converter).baseCurrency

  useEffect(() => {
    dispatch(getRates({ baseCurrency }))
  }, [dispatch, baseCurrency])

  return (
    <div className="App">
        <NavBar />
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Converter />
          </Route>
          <Route path="/rates">
            <ExchangeRate />
          </Route>
        </Switch>
        </div>
    </div>
  );
}

export default App;
