import React, {useState, useEffect} from "react"
import axios from 'axios'
import {Card, Icon, Button, Header, Segment } from 'semantic-ui-react'
import {Link} from "react-router-dom"

const DepartmentView = (props) =>{

  const [dep, setDep] = useState([])
  useEffect( ()=> {
    const {id} = props.match.params
    axios.get(`/api/departments/${id}/items`)
      .then(res =>{
        debugger
        setDep(res.data)
      })
  },[])

  const renderItems = () => {
    if(dep.length <=0)
    return <Header as='h2'>No Departments Yet</Header>
    return dep.map(item =>(
      <Card color='blue' key={item.id}>
        <Card.Content>
          <Card.Header>{item.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button icon as={Link} to={`/departments/${item.id}`} color = "red">
            <Icon name="trash"/>
          </Button>
        </Card.Content>
      </Card>
    ))

  }
  return(

    <div>
    <Segment>
      
      <Header as='h1'>The Stuff</Header>
      <Card.Group>
        {renderItems()}
      </Card.Group>
      {/* <Header as='h3'>{product.department}</Header> */}
      {/* <Header as='h5' color="grey">${product.price}</Header> */}
    </Segment>
    <br />
    <br />
    <Button color='black' onClick={()=>props.history.goBack()}>
      Back
    </Button>
  </div>
  )

}

export default DepartmentView