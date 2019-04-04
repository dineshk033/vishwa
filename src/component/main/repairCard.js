import React from 'react';
import { Modal, Segment,Form,Button} from 'semantic-ui-react';

const options=[
    { key: 1, text: 'HP', value: 1 },
    { key: 2, text: 'DELL', value: 2 },
    { key: 3, text: 'Apple', value: 3 },
    { key: 4, text: 'Toshiba', value: 4 },
    { key: 5, text: 'Acer', value: 5 },
    { key: 6, text: 'Asus', value: 6 },
    { key: 7, text: 'HCL', value: 7 },
    { key: 8, text: 'Sony', value: 8 },
    { key: 9, text: 'IBM', value: 9 },
]
class RepairCard extends React.Component{
    state = { open: true,brand:'',modal:'',timeSlot:'',issue:'',contact:'',check:false,name:'',
                error:{
                    brand:true,contact:true
                } 
            };
    close = () => {this.setState({ open: false });this.props.togglechange(false)};

    handleChange = (e, { name, value }) => this.setState({ [name]: value },()=>{this.validationField(name,value)});
    
    handleSubmit=()=>{
        console.log(this.state);
    }
    validationField(name,value){
        const {error}=this.state;
        switch(name){
            case 'brand':
            console.log(value)
                error.brand=value?false:true;
                this.setState({error:error})
                break;
            case 'contact':
                error.contact=value.length>9?false:true;
                this.setState({error:error})
                break;
            default:
                break;
        }
    }

render(){
    const {open,brand,modal,timeSlot,check,contact,issue,error,name}=this.state
    const submitDisable =(!error.brand && !error.contact )  && check
    console.log(submitDisable,'sdsdsd')
    return(
        <Modal basic centered dimmer='blurring' open={open}  onClose={this.close} >
         <Modal.Header>Book a Techie Visit</Modal.Header>
         <Modal.Content >
        <Segment inverted color='yellow'>
        <Form onSubmit={this.handleSubmit} autoComplete='off' >
            <Form.Dropdown required label ='Brand' name='brand' value={brand} onChange={this.handleChange}  onClick={this.handleChange}
            fluid placeholder ='Select Brand' clearable options={options} selection  error={error.brand}/>
          <Form.Group widths='equal'>
            <Form.Input required fluid label='Modal Number'  value={modal}
            name='modal' onChange={this.handleChange}  placeholder='Eg: Dell Inspiron' />
            <Form.Input required fluid label='Time slot' value={timeSlot}
             name='timeSlot' onChange={this.handleChange} placeholder='Eg: 11AM' />            
          </Form.Group>
          <Form.TextArea required label='Issue' name='issue' value={issue} onChange={this.handleChange} 
           placeholder='Write your queries here...' style={{ minHeight: 100 }} />
            <Form.Group widths='equal'>
            <Form.Input required fluid label='Person Name' value={name}  
          name='name' onChange={this.handleChange}  placeholder='Eg: Niki' />  
          <Form.Input required fluid label='Contact Number' value={contact}  error={error.contact}
          name='contact' onChange={this.handleChange}  placeholder='Eg: 9874563210' />  

          </Form.Group>
          <Form.Checkbox required name='check' checked={check}
          onChange={()=>this.setState({check:!this.state.check})}  label='I agree to the Terms and Conditions' />
          <Button disabled={!submitDisable} type='submit'>Submit</Button>
        </Form>
        </Segment>
        </Modal.Content>
        </Modal>
    );
}
}

export default RepairCard;