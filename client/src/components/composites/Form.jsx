import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Route } from 'react-router-dom';

const SubmitButton = (props) => {
    return <Button onClick={ props.submitHandler } type='submit'>Submit</Button>
}

const CustomForm = (props) => (
  <Form>
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
    <Route path={ props.match.url + '/submit' } component={SubmitButton}/>
  </Form>
)

export default CustomForm;