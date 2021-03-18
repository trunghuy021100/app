import React from 'react'
import './index.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './component/Navbar'
import Trangtru from './pages/Trangtru'
import Footer from './component/Footer'
const App = () => {
  return (
   <Router>
     <Navbar>  
     </Navbar>
     <Switch>
       <Route exact path="/"><Trangtru></Trangtru></Route>
     </Switch>
     <Footer></Footer>
   </Router>
  )
}

export default App

