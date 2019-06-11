import React from "react"
import {Form, Header} from 'semantic-ui-react'
import axios from 'axios'

class ItemsForm extends React.Component{
  defaultValues = { name: "", price: ""}
  state = {...this.defaultValues}
  handleSubmit = (e)=>{
    const id = this.props.match.params.department_id
    e.preventDefault()
    axios.post(`/api/departments/${id}/items`,{ ...this.state, })
      .then(res=>{
       this.props.history.push(`/departments/${id}/`)
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
            label="Item"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
            />
               <Form.Input
            label="Price"
            name="price"
            placeholder="Price"
            type="number"
            value={this.state.price}
            onChange={this.handleChange}
            />
          </Form.Group>
          
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default ItemsForm