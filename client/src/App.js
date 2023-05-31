import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { hot } from 'react-hot-loader'
import './App.css'
import { Notifications } from 'react-push-notification';

const App = () => {

  return (
  <BrowserRouter >
  <Notifications />
        <MainRouter/>
  </BrowserRouter>
)}

export default hot(module)(App)
