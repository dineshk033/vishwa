import React from 'react';
import { Card} from 'semantic-ui-react';
import {connect} from 'react-redux';

import Products from './Products';


class ProductIndex extends React.Component {
    
    renderList(){
        //console.log(this.props);
       return this.props.Items.map(list=>{
                return <Products list={list} key={list.id}/>
              
        });
    }
   render() {
    return (
        <Card.Group stackable itemsPerRow={4} >             
            {this.renderList()}
        </Card.Group>
    )}
}

const MapStateToProps=state=>{
  //  console.log(state);
    return state;
}
export default connect(MapStateToProps)(ProductIndex);