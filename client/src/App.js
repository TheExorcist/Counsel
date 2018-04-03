import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import FixedMenuLayout from './components/containers/layout/Application';
import { Route } from 'react-router-dom';
import FormRoute from './components/routes/FormRoute'
import CustomForm from './components/composites/Form';

class App extends Component {

  render() {

    return (
      <div className="App">
        <FixedMenuLayout >
          <Route exact path="/" />
          <Route path='/signup' component={CustomForm} />
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
    createUser: (email, name) => dispatch({type: 'USER_SIGNUP', payload: {email, name}}) 
  }
} 


const AppConnect = connect(mapStateToProps, mapDispatchToProps)(App)

const AppRouter = () => {
  return <App />
}

export default AppRouter;
