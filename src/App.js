import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
import { LandingPage } from './pages/LandingPage'
import { DogDetailPage } from 'pages/DogDetailPage'
import { DogBreedPage } from 'pages/DogBreedPage'
import { SignupPage } from 'pages/SignupPage'
// Components
import { NavBar } from 'components/NavBar'
import { Footer } from './components/Footer'

// Global style
import { GlobalStyle } from './lib/GlobalStyle'

// Reducer
import { dogdata } from './reducers/dogdata'
import { userdata } from './reducers/userdata'



// Object with path to images
export const PATHS = {
  dog_races: "/assets/dog_races/",
}



// Combined reducers
const reducer = combineReducers({
  dogdata: dogdata.reducer,
  userdata: userdata.reducer,

})

// THE STORE
export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />

      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/dog/:dogId">
            <DogDetailPage />
          </Route>
          <Route path="/dogbreeds">
            <DogBreedPage />
          </Route>
          <Route path="/signin">
            <div>
              Sign in
            </div>
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}
