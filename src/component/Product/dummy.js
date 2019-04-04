import React from 'react';
import {Carousel} from 'react-bootstrap';

import RefurbishPhoto from '../../refurbish_banner.jpg'
import Photo1 from '../../01.jpg'
class ControlledCarousel extends React.Component {
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

  render() {
    const { index, direction ,interval} = this.state;

    return (
      <Carousel 
        activeIndex={index}
        direction={direction}
        interval={interval}
        onSelect={this.handleSelect}
        
      >
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height:'40vh'}}
            src={RefurbishPhoto}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height:'40vh'}}
            src={Photo1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  w-100" style={{height:'40vh'}}
            src="https://alcnet.org/wp-content/uploads/2018/09/computer-hardware-repairs-830x450.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100" style={{height:'40vh'}}
            src="https://ak5.picdn.net/shutterstock/videos/713575/thumb/1.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default ControlledCarousel;