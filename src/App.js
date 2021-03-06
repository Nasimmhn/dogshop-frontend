import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
import { LandingPage } from './pages/LandingPage'
import { DogDetailPage } from 'pages/DogDetailPage'
import { BreedPage } from 'pages/BreedPage'
import { BreedDetailPage } from 'pages/BreedDetailPage'
import { SignupPage } from 'pages/SignupPage'
import { LoginPage } from 'pages/LoginPage'
import { MemberPage } from 'pages/MemberPage'
import { PrivateRoute } from 'components/PrivateRoute'

// Components
import { NavBar } from 'components/NavBar'
import { Footer } from 'components/Footer'
import { Logout } from 'components/Logout'


// Global style
import { GlobalStyle } from './lib/GlobalStyle'

// Reducer
import { dogdata } from './reducers/dogdata'
import { userdata } from './reducers/userdata'
import { ui } from './reducers/ui'

export let API = 'https://dog-shop-by-nasim.herokuapp.com'

if (process.env.NODE_ENV === "development") {
  API = 'http://localhost:8080'
  console.log("NODE_ENV: ", process.env)
}

// Object with path to images
export const PATHS = {
  breeds: "/assets/breeds/",
  dogs: "",
  uploads: `${API}/upload/image`
}

// Combined reducers
const reducer = combineReducers({
  dogdata: dogdata.reducer,
  userdata: userdata.reducer,
  ui: ui.reducer

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

          <Route path="/breeds">
            <BreedPage />
          </Route>

          <Route path="/breed/:breedId">
            <BreedDetailPage />
          </Route>

          <Route path="/signup">
            <SignupPage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <PrivateRoute path="/members">
            <MemberPage />
          </PrivateRoute>

          <Route path="/logout">
            <Logout />
          </Route>

        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}
