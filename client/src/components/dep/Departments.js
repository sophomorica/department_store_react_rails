import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import { Card, Header, Button } from 'semantic-ui-react'

const Departments = (props) =>{
  const [deps, setDeps] = useState([])

  useEffect(() =>{
    axios.get('/api/departments')
      .then(res =>{
        setDep(res.data)
      })
  },[])

  const renderDeps = () => {
    if(deps.length <=0)
    return <Header as='h2'>No Departments Yet</Header>
    return deps.map(dep =>(
      <Card color='blue' key={dep.id}>
        <Card.Content>
          <Card.Header>{dep.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/departments/${dep.id}`} color = "blue">View</Button>
        </Card.Content>
      </Card>
    ))

  }

  return(
    <div> 
      <Header as = 'h1'>The Mall</Header>
      <Button as={Link} to="/departments/new" color='blue'>
        Add Department
      </Button>
      <br/>
      <hr />
      <br/>
      <div className="card_group">

      <Card.Group>
        { renderDeps() }
      </Card.Group>
      </div>
    </div>
    
  )
  
}