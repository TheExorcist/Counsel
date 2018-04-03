import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const SubmitButton = (props) => {
    return <Button onClick={ props.submitHandler } type='submit'>Submit</Button>
}

const CustomForm = (props) => {

  if(props.currentUser.data) {
    return <Redirect to="/" />
  }

  return (
  <Form role="users">
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button onClick={props.createUser} type='submit'> Submit </Button>
  </Form>
  )
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (email, name) => dispatch({type: 'USER_SIGNUP', payload: { email, name }})
  }
}

const CustomFormConnect = connect(mapStateToProps, mapDispatchToProps)(CustomForm);

export default CustomFormConnect;
