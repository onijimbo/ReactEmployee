import React, { useEffect, useState } from "react";
import Main from "./pages/Main";
import Filtered from "./pages/Filtered";
import Sorted from "./pages/Sorted";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from 'axios'
import "./App.css";
import './components/Nav.css'

function App() {
  const [ newRes, setRes ] = useState([]);
  const [ filterRes, setFilter ] = useState([]);
  const [ sortRes, setSort ] = useState([]);


  useEffect(() => {
   
    axios.get(`https://randomuser.me/api/?results=15&nat=us,ca,fr`)
        .then((response)=>{
          console.log(response.data.results)
          setRes(response.data.results)
          const e = Array.from(response.data.results)
          const usEmploy = response.data.results.filter(employ => employ.nat === 'US')
          // console.log(usEmploy)
          setFilter(usEmploy)
          const seniorEmploy = e.sort((a,b)=> b.registered.age-a.registered.age)
          
          console.log(e)
          setSort(seniorEmploy)
        })
        
       
          
     
      }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route exact path={["/", "/Main", 'onijimbo.github.io/ReactEmployee/']}>
            <Main res={newRes} />
          </Route>
          <Route path="/Filtered">
            <Filtered res={filterRes} />
          </Route>
          <Route path="/Sorted">
            <Sorted res={sortRes} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
