import React,{Component} from 'react';
import './App.css';
import Header from './header/header';
import Main from './main/main'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Liste from './main/liste';
import Liste2 from './main/liste2';
import Liste3 from './main/liste3';
import Liste4 from './main/liste4';
import Liste5 from './main/liste5';
import Liste6 from './main/liste6';



class App extends Component {
  render(){
  return (
    <BrowserRouter >
    <div className="App">
      <Header/>
      <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/liste" component={Liste} />
            <Route path="/liste2" component={Liste2} />
            <Route path="/liste3" component={Liste3}  />
            <Route path="/liste4" component={Liste4} />
            <Route path="/liste5" component={Liste5} />
            <Route path="/liste6" component={Liste6} />
      </Switch>
                
      </div>
      </BrowserRouter >
  );
}}

export default App;
