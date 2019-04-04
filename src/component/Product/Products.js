import React from 'react'
import { Card, Icon, Image,Button,Checkbox,Label } from 'semantic-ui-react'


function Products  (props){
    let title=props.list.Title;
    title=title.length>40?title.substring(0,40)+'..':title;
  return (<Card style={{ boxShadow: '0 4px 8px 2px rgba(0, 0, 0, 0.2)'}}>      
    <Image src={props.list.imageUrl} />
    
    <Card.Content textAlign='center' >
      <h4 className="ui teal header" >{title}</h4>
      <Card.Meta >{props.list.Brand}&nbsp;|&nbsp;{props.list.ram}</Card.Meta>
      <Card.Description >
        <p>{props.list.hardDisk}</p>              
        <Checkbox label='Add to Compare ' />
      </Card.Description>            
    </Card.Content>     
    <div className="card-footer">    
      <Button color='yellow' fluid>Rs.{props.list.Price}</Button>    
   
    </div>    {/* <div className="ui bottom attached animated fade text-yellow button" tabIndex="0">
        <div className="visible content">Rs.{props.list.Price}</div>
        <div className="hidden content">
        Sign-up for more
        </div>   
    </div>     */}
  </Card>)
}

export default Products