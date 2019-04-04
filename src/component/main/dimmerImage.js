import React from 'react';
import { Segment,Button, Dimmer, Header, Image} from 'semantic-ui-react';


class DimmerImage extends React.Component{
    state = {}
    
     
    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })
    handleChange=()=>{this.props.handleRedirect(this.props.list.header)}
    render() {
      const { active } = this.state;
      const {header,info,photo,button}=this.props.list;
      const content = (
        <div>
          <Header as='h2' inverted>
            {header}
          </Header>  
          <Header size='medium' inverted >{info}</Header>
          <Button >{button}</Button>
        </div>
      )
  
      return (
        <Dimmer.Dimmable as={Segment} dimmed={active} onMouseEnter={this.handleShow} onMouseLeave={this.handleHide}>
            <p>
            <Image size='large' src={photo} />
          </p> 
          <Dimmer active={active} onClick={this.handleChange} verticalAlign='top'>
            {content}
          </Dimmer>
        </Dimmer.Dimmable>
      )
}
}
export default DimmerImage;