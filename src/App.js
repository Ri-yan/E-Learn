import React from 'react';
import './App.css';
import Navigation from "./component/Navigation/Navigation";
import Cover from "./component/Cover/Cover";
import C from './component/C/C';
import Register from './component/Register/Register';
import Footer from './component/Footer/Footer';

class App extends React.Component { 
  constructor(){
    super();
  this.state={
    route:'home'
  }
}
  onRouteChange = (route) =>{
    this.setState({route:route});
  }
  render(){  
  return (
    <div className="App">
    <Navigation onRouteChange={this.onRouteChange}/>
      { 
  this.state.route ==='home'
  ?<div>
      <Cover onRouteChange={this.onRouteChange}/>
      <Footer onRouteChange={this.onRouteChange}/>
    </div>
      :(
        this.state.route ==='register'
        ?<Register onRouteChange={this.onRouteChange}/>
         :this.state.route ==='about'
         ?<Footer onRouteChange={this.onRouteChange}/>
          :<C/>
        )
}  
    </div>
  );
}
}

export default App;
