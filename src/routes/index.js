import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'mobx-react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import baseStyles from './base-styles'
import PrivateRoute from './private-route'
import Header from '../components/common/header'
import Content from '../components/common/content'
import Login from '../views/login'
import Home from '../views/home'
import DevTools from "mobx-react-devtools"

// Import Stores Here
import AuthStore from "../store/auth"

const authStore = AuthStore.create({
  logged: false
});

const store = {
  auth : authStore
};

const Root = () => {
  baseStyles();
  return (
    <Provider {...store} >
      <Router>
        <div>
          <DevTools />
          <Header/>
          <Content>
            <Switch>
              <Route exact path="/login" component={Login}/>
              <PrivateRoute exact path="/home" component={Home}/>
            </Switch>
          </Content>
        </div>
      </Router>
    </Provider>
  )
};

export default Root;