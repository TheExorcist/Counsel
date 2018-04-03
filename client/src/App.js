import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import FixedMenuLayout from './components/containers/layout/Application';
import { Route, withRouter } from 'react-router-dom';
import FormRoute from './components/routes/FormRoute'
import CustomForm from './components/composites/Form';

class App extends Component {

  componentWillMount() {
    this.props.getGetCurrentUser()
  }

  render() {

    return (
      <div className="App">
        <FixedMenuLayout currentUser={this.props.currentUser}>
          <Route exact path='/signup' component={CustomForm} />
          <Route exact path='/' />
        </FixedMenuLayout>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentUser : state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (email, name) => dispatch({type: 'USER_SIGNUP', payload: {email, name}}),
    getGetCurrentUser: () => dispatch({ type: 'GET_LOGGEDIN_USER'})
  }
}


const AppConnect = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

const AppRouter = (props) => {
  return <AppConnect />
}

export default AppRouter;
