import React from "react";
import Layout from "../components/layout";
import { Title, Link, Meta } from "react-head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Seo = () => (
  <>
    <Title>Serditov Showcase</Title>
    <Meta name="description" content="Anton Serditov showcase" />
    <Link rel="canonical" content="https://serditov.com/showcase" />
  </>
);

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      customPaging: function(i) {
        return (
          <a>
            <img src={`/abstract0${i + 1}.jpg`} />
          </a>
        );
    }
  }
    return (
      <Slider {...settings}>
        <div>
        <img src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/the_residence.jpg" />
        </div>
        <div>
        <img src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_avant_garde_tower_09.jpg" />
        </div>
        <div>
        <img src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_frognal_way_20.jpg" />
        </div>
        <div>
        <img src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_frognal_way_12.jpg" />
        </div>
        <div>
        <img src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_knights_wood_10-RT-375x250.jpg" />
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}

{/* <Slider>
          <Slide index={0}><Image src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/the_residence.jpg" /></Slide>
          <Slide index={1}><Image src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_avant_garde_tower_09.jpg" /></Slide>
          <Slide index={2}><Image src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_frognal_way_20.jpg" /></Slide>
          <Slide index={3}><Image src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_frognal_way_01-375x250.jpg" /></Slide>
          <Slide index={4}><Image src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_frognal_way_12.jpg" /></Slide>
          <Slide index={5}><Image src="http://www.honky.co.uk/site/wp-content/uploads/2015/04/ab_knights_wood_10-RT-375x250.jpg" /></Slide>
          
        </Slider> */}


const Showcase = ({location}) => {

  return (
    <Layout location={location}>
      <Seo />
    <SimpleSlider/>
      </Layout>
  )
}

export default Showcase