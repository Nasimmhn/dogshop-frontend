import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { Footer } from './components/Footer'
import { GlobalStyle } from './lib/GlobalStyle'








export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  )
}
