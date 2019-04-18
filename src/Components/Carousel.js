import React from 'react';
import Slider from "react-slick";

export class Carousel extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return(
      <>
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <Slider {...settings}>

        {this.props.slides}
      </Slider>
      </>
    );
  }
}

export default Carousel;
