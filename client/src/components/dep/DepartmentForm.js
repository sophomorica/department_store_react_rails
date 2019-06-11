import React from "react"
import {Form, Header} from 'semantic-ui-react'
import axios from 'axios'

class DepartmentForm extends React.Component{
  defaultValues = { name: "",}
  state = {...this.defaultValues}
  handleSubmit = (e)=>{
    e.preventDefault()
    axios.post("/api/departments",{ ...this.state, })
      .then(res=>{
        this.props.history.push('/departments')
      })
    // TODO: Make api Post request
    this.setState({...this.defaultValues})
  }
  handleChange = (e, {name, value} ) => this.setState({[name]:value})
  
  render(){
    return(
      <div>
        <Header as='h1'>New Product</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
            label="Name"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
            />
          </Form.Group>
          
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default DepartmentForm