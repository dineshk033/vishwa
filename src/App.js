import React, { Component ,Suspense,lazy} from 'react';
import { Label,Image,Segment,Placeholder} from 'semantic-ui-react'
import {createStore} from'redux';
import {Provider} from'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";



import './App.css';
import HeaderBar from './component/header';
import Mains from './component/Product';
import CustomBuild from './component/customBuild';
import Reducers from './reducer';

import SubDir from './component/main'
import RepairCard from './component/repair';
import Appointment from './component/main/repairCard';
import Footer from './component/footer';
const ImageCarousel = lazy(() => import('./component/Product/dummy'));
const store=createStore(Reducers);
class App extends Component {
  state={dialogOpen:false};
  toggleModal=()=>{
    this.setState({dialogOpen:false});
  }
 render() {
    return (
    <Provider store={store}>
    <Router>
      <div className="App">               
          <HeaderBar />        
        <Segment  >
        <Suspense fallback={
           <Placeholder>
           <Placeholder.Header image>
             <Placeholder.Line />
             <Placeholder.Line />
           </Placeholder.Header>
           <Placeholder.Paragraph>
             <Placeholder.Line />
             <Placeholder.Line />
             <Placeholder.Line />
             <Placeholder.Line />
           </Placeholder.Paragraph>
         </Placeholder>
        }>
          <ImageCarousel />
          </Suspense>
        </Segment>
        <Route path="/Products/" component={Mains} />
        <Route path="/" exact component={SubDir} />   
        <Route path="/custom" exact component={CustomBuild} />    
        <Route path='/repair' exact component={RepairCard}/>  
        
        <div className="iconFixed">
                <Label as='a' size='large' color='red' onClick={()=>this.setState({dialogOpen:true})}>
                    <Image avatar spaced='right' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                    Book a Techie Visit
                </Label>
         </div>
         {this.state.dialogOpen && <Appointment togglechange={this.toggleModal}/>}         
        </div>
        <Footer/> 
        </Router>
    </Provider>
    );
  }
}

export default App;
