import React from 'react';
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/dep/Home'
import About from './components/dep/About'
import NoMatch from './components/dep/NoMatch'
import Navbar from './components/dep/Navbar'
import Departments from './components/dep/Departments'
import DepartmentForm from './components/dep/DepartmentForm'
import DepartmentView from './components/dep/DepartmentView'
import ItemsForm from './components/item/ItemsForm'

const App =() =>(

 <>
 <Navbar/>
 <Container>
    <Switch>
      <Route  exact path="/" component={Home}/>
      <Route  exact path="/about" component={About}/>
      <Route  exact path="/departments" component={Departments}/>
      <Route  exact path="/departments/new" component={DepartmentForm}/>
      <Route  exact path="/departments/:id" component={DepartmentView}/>
      <Route  exact path="/departments/:department_id/items/new" component={ItemsForm}/>
      <Route   component={NoMatch}/>
    </Switch>
    
 </Container>
 </>
    
)

export default App;
