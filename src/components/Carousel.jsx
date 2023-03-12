import React from 'react';
import Slider from 'react-slick';
import './CarouselSlick.scss';
import './CarouselSlicktheme.scss';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imgUrl = [
    {
      id: 1,
      title: 'event1',
      image:
        'https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3013&q=80',
    },
    {
      id: 2,
      title: 'event2',
      image:
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    },
    {
      id: 3,
      title: 'event3',
      image:
        'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {imgUrl.map((item) => (
          <img key={item.id} src={item.image} alt={item.title} />
        ))}
      </Slider>
    </div>
  );
}
