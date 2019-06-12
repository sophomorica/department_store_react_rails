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
        setDep(res.data)
      })
  },[])
  const deleteItem = (item_id) =>{
    const {id} = props.match.params
    axios.delete(`/api/departments/${id}/items/${item_id}`)
      .then(res=>{
        let values = (dep.filter(item => item.id !==item_id))
        setDep(values)
      })
      renderItems()
  }
  const renderItems = () => {
    if(dep.length <=0)
    return <Header as='h2'>No Products Yet</Header>
    // return dep.map(item =>(
    //   <Card color='blue' key={item.id}>
    //     <Card.Content>
    //       <Card.Header>{item.name}</Card.Header>
    //     </Card.Content>
    //     <Card.Content extra>
    //       <Button icon as={Link} to={`/departments/${item.id}`} color = "red">
    //         <Icon name="trash"/>
    //       </Button>
    //     </Card.Content>
    //   </Card>
    // ))
    return dep.map(item =>(
      <div style={{display:"flex", flexDirection:"column"}}>

      <ul>
        <li>{item.name}: ${item.price} <Button icon onClick={()=>deleteItem(item.id)}><Icon name='trash'/></Button></li>
      </ul>
      </div>
    ))

  }
  return(

    <div>
    <Segment>
      
      <Header as='h1'>What We Got</Header>
      <Header as='h2'>{props.name}</Header>
      <Card.Group>
        {renderItems()}
      </Card.Group>
      {/* <Header as='h3'>{product.department}</Header> */}
      {/* <Header as='h5' color="grey">${product.price}</Header> */}
    </Segment>
    <br />
    <br />
    <Button as={Link} to={`/departments/${props.match.params.id}/items/new`}  color='blue'>
        Add Items
      </Button>
    
    <Button color='black' onClick={()=>props.history.goBack()}>
      Back
    </Button>
  </div>
  )

}

export default DepartmentView