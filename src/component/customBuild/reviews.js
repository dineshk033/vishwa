import React from 'react';
import {Carousel} from 'react-bootstrap';
import { Segment,Header,Icon,Label } from 'semantic-ui-react';

const list=[{comment:"You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service with OneTechies. Highly appreciated!! Thank you guys!",
            author:'Mr.Karthi'},{
                comment:"OneTechies did great job with fixing my office laptops for a good price. I recommend any body with laptop problems, they will give you excellent service to all their customers.  Have recommended you to another 2 businesses in my building.",
                author:'Mr.Ragu'
            },{
                comment:'I was amazed at the quality of service. I like OneTechies more and more each day because it makes my life a lot easier. Thanks guys, keep up the good work! I recommend OneTechies to everyone. Simple yet exceptional service!',
                author:'Mrs.Usha'
            }]
class Reviews extends React.Component {
  
    constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      interval:4000
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }
renderCarousel(){
  return  list.map((element,idx)=>{
     return   <Carousel.Item key={idx}>
        <Segment raised inverted color='red' fluid secondary >
        <Label as='a' color='teal' size='large' ribbon>
          Customer reviews
        </Label>
        <Header icon textAlign='center'>
            <Icon color='yellow' name='users'  />
            <Header.Content as='h4'> 
                <cite>
                    "{element.comment}"
                </cite>
            </Header.Content>           
        </Header>
        <Header  textAlign='right' as='h2' > <cite>By &nbsp; {element.author}</cite></Header>
        </Segment>
        </Carousel.Item>
    })
}
  render() {
    const { index, direction ,interval} = this.state;

    return (
      <Carousel 
        activeIndex={index}
        direction={direction}
        interval={interval}
        onSelect={this.handleSelect}
        color='yellow'
      >
        {this.renderCarousel()}
      </Carousel>
    );
  }
}
export default Reviews;