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

const App =() =>(

 <>
 <Navbar/>
 <Container>
    <Switch>
      <Route  exact path="/" component={Home}/>
      <Route  exact path="/about" component={About}/>
      <Route  exact path="/Departments" component={Departments}/>
      <Route  exact path="/Departments/new" component={DepartmentForm}/>
      <Route  exact path="/Department/:id" component={DepartmentView}/>
      <Route   component={NoMatch}/>
    </Switch>
    
 </Container>
 </>
    
)

export default App;
