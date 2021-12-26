import React from 'react';
import './App.css';
import Navigation from "./component/Navigation/Navigation";
import Welcome from "./component/Welcome/Welcome";
import Register from './component/Register/Register';
import Footer from './component/Footer/Footer';
import Intro from './component/Intro/Intro';
import About from './component/About/About';
import Services from './component/Services/Services';
import Alternate from './component/Service-Route/Alternate';

class App extends React.Component { 
  constructor(){
    super();
  this.state={
    route:'home',
    services: [],
    searchfield: ''
  }
}
  onRouteChange = (route) =>{
    this.setState({route:route});
  }
  render(){  
  return (
    <div className="App">
    <Navigation onRouteChange={this.onRouteChange}/>
    {/* <Alternate/> */}
      { 
        this.state.route ==='home'
        ?<div style={{'width': '-webkit-fill-available'}}>
          <Welcome onRouteChange={this.onRouteChange}/>
          <Intro onRouteChange={this.onRouteChange}/>
          <Footer onRouteChange={this.onRouteChange}/>
        </div>
      :(
        this.state.route ==='register'
        ?<Register onRouteChange={this.onRouteChange}/>
         :this.state.route ==='about'
         ?<About onRouteChange={this.onRouteChange} />
          :this.state.route ==='services'
          ?<Services onRouteChange={this.onRouteChange} searchfield={this.searchfield}/>
          :this.state.route ==='service-route'
          ?<Alternate onRouteChange={this.onRouteChange}/> 
            :<Footer onRouteChange={this.onRouteChange}/>
        )
}  
    </div>
  );
}
}

export default App;
