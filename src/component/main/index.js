import React from 'react';

import { Grid,Header,Icon, Segment,List,Button} from 'semantic-ui-react'
import DimmerImage from './dimmerImage';
import Photo1 from '../../Benefits.jpg';
import Photo2 from '../../maxresdefault.jpg';
import './mainstyle.css';

import { Container } from 'react-bootstrap';

const list=[    
    {header:'Custom Build',info:'Build the PC of your dreams!',photo:Photo2,button:'More Information'},
    {header:'Shop',info:'Refurbished products at great prices',photo:Photo1,button:'More Information'},
    {header:'Service',info:'Diagnostic and Serive at affordable Price',photo:Photo2,button:'Book an Appointment'}
];

class Main extends React.Component{

    handleRedirect=(event)=>{     
       // console.log(event)   
        if(event==='Service') {
            //console.log(event);
            this.props.history.push('/repair');
        } else if(event==='Shop'){
           this.props.history.push('/Products');
        } else if(event==='Custom Build'){
            this.props.history.push('/custom'); 
        }
    }
    renderList(){
       return list.map((item,idx)=>{
           return ( <Grid.Column key={idx}mobile={16} tablet={5} computer={5}>           
           <DimmerImage  list={item}  handleRedirect={this.handleRedirect}/>
           </Grid.Column>)
        })  
    }   

    render() {  
      return (
          <Container>
        <Grid centered>
        <Grid.Row stretched>  
            <Grid.Column mobile={16} tablet={8} computer={10}>
            <Segment style={{padding:'20px'}}>
               <Header as='h2' color='teal'>
                <Icon color='red' name='settings' />
                <Header.Content >
                Our Services                
                </Header.Content>
            </Header>
            <hr/>
            <p className="paragraph">
            Offering Sales & Repairs of Laptops, PC’s, Tablets and Mobile, Laptop Station has built a reputation for offering excellent service at affordable prices.
            </p>
            <p className="paragraph">
            All our items are fully tested and come with a warranty for complete peace of mind.
            </p>
            <p className="paragraph">
            Our Collect & Return service for repairs means that you can have your device collected from home or work and be confident it will be transported safely to our workshop. Once completed we can return it to the address of your choosing.
            </p>
            </Segment>            
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={6}>
                <Segment style={{padding:'20px'}}>                
                <Header as='h2' color='teal'>
                    <Icon color='red' name='users' />
                    <Header.Content>
                        Uniqeness Behind Market              
                    </Header.Content>
                </Header>
                <hr/>
                <List divided verticalAlign='middle'>
                    <List.Item icon='marker' color='red' className="paragraph" content='Professional Laptop & Printer Service Team' />
                    <List.Item icon='marker' color='red' className="paragraph" content='Doorstep Service Within a Day' />
                    <List.Item icon='marker' color='red' className="paragraph" content='Free Laptop Diagnostic at our branch' />
                    <List.Item icon='marker' color='red' className="paragraph" content='Unused Electronics Accessories also we bought at market Price' />
                    <List.Item icon='marker' color='red' className="paragraph" content='60-Days Post-service Guarantee' />
                </List>
                <div style={{textAlign:'center'}}>
                <Button 
                    color='yellow'
                    content='Call'
                    icon='call'
                    label={{ basic: true, color: 'yellow', pointing: 'left', content: '9874561230' }}
                    /></div>
                </Segment>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>  
          {this.renderList()  }
          </Grid.Row>       
        </Grid>
        </Container>
        )
}
}
export default Main;