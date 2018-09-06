import React, { Fragment } from 'react'
import {Redirect} from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Form from '../../components/login/form'

const Login = (props) => {
  const {from} = props.location.state || {from: {pathname: "/home"}};

  if (props.auth.logged) {
    return <Redirect to={from}/>;
  }

  return (
    <Fragment>
      <Form>
        <h2>You need to be logged to see the route: {from.pathname}</h2>
        <button onClick={() => props.auth.login()}>Entrar</button>
        {console.log('props', props.auth)}
      </Form>
    </Fragment>
  )
}

export default inject("auth")(observer(Login));