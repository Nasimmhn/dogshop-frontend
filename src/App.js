import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { Footer } from './components/Footer'
import { GlobalStyle } from './lib/GlobalStyle'
import { dograces } from './reducers/dograces'






// COMBINING REDUCERS
const reducer = combineReducers({
  dograces: dograces.reducer,

})


// THE STORE
export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </Provider>
  )
}
