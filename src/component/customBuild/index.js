import React from 'react';
import { Button, Checkbox, Form,Container,Segment,Header,Grid ,Advertisement,Responsive} from 'semantic-ui-react';

import Reviews from './reviews';
class CustomBuild extends React.Component{

    render(){
        return(
            
            <Container>
                <Grid centered>
            <Grid.Row stretched>  
            <Grid.Column mobile={16} tablet={10} computer={12}>
                <Segment raised inverted color='teal'>
                <Header as='h2'>Get a Free Quote</Header>  
                Custom Configuration Of Laptop/Desktop  Modals
                </Segment>
                <Segment>
            <Form container autoComplete='off' >
                <Form.Group widths='equal'>
                    <Form.Input required fluid label='First Name'  
                    name='modal'  placeholder='First Name' />
                    <Form.Input required fluid label='Last Name'  
                    name='modal'  placeholder='Last Name' />            
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input required fluid label='Email ID'  
                    name='modal'  placeholder='abc@gmail.com' />
                    <Form.Input required fluid label='Conact Number'  
                    name='modal'  placeholder='Contact Number' />            
                </Form.Group>
                <Form.Input required fluid label='Subject'  
                    name='modal'  placeholder='Subject' /> 
                    <Form.TextArea required label='Details' name='issue' 
                    placeholder='Write your custom Configuration here...' style={{ minHeight: 150 }} />
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <div className="text-center "  >
            <Button style={{width:'250px'}} positive type='submit '>Get a Qoute </Button>
            </div>
            
          </Form></Segment>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={4} computer={4}>
          <Responsive  minWidth={Responsive.onlyTablet.minWidth}>
            <Advertisement unit='half page' test='Half Page' />
          </Responsive>
          </Grid.Column>
          </Grid.Row>         
          <Grid.Row>
            <Grid.Column  mobile={16} tablet={16} computer={16}>
                <Reviews/>
            </Grid.Column>              
          </Grid.Row>
          </Grid>
          </Container>
          
        );

    }
}

export default CustomBuild;
