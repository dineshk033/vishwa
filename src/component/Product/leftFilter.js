import React from 'react';

import {ProductItems} from '../../api/list';
import { Responsive ,Segment,Button, Checkbox, Form,Dropdown,Input } from 'semantic-ui-react';

class LeftFilter extends React.Component{
     state={
        brandOptions:[],price:100000,brand:[]
     }
     componentDidMount(){
        const brand = [];
        const map = new Map();
        for (const item of ProductItems) {
           // console.log(item);
            if(!map.has(item.Brand)){
                map.set(item.Brand, true);    // set any value to Map
                brand.push({
                    key: item.Brand,
                    text: item.Brand,
                    value:item.Brand
                });
            }
     }
     this.setState({brandOptions:brand});    
    }

    handleSubmit=()=>{
        const {brand,price}=this.state;
        console.log(brand,price)
    }
    render(){
        return(
            <Responsive  minWidth={Responsive.onlyTablet.minWidth}>
            <Segment style={{marginLeft:'20px'}}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Brand Catagory</label>
                <Dropdown placeholder='Choose a Brand' renderLabel={label=>({color:'blue',content:`${label.text}`})} name='brand' 
                fluid multiple selection value={this.state.brand}
                onChange={(e, { name, value }) => this.setState({ [name]: value })}
                options={this.state.brandOptions} />
              </Form.Field>
              <Form.Field>
                <Form.Input
                label={`Price: ${this.state.price}Rs. `}
                min={500}
                max={100000}
                name='price'
                onChange={(e, { name, value }) => this.setState({ [name]: value })}
                step={500}
                type='range'
                value={this.state.price}
                />
              </Form.Field>
              <Button type='submit'>Filter</Button>
            </Form></Segment></Responsive>
        );
    }

}

export default LeftFilter;