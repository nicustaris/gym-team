import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GalleryImg from "./gallery.jpg";
import GalleryImg2 from "./gallery2.jpg";
import GalleryImg3 from "./gallery3.jpg";
import GalleryImg4 from "./gallery4.jpg";

import "./Coaches.scss";

const Coaches = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display 3 items at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1240, // Medium devices (tablets, small laptops)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 840, // Medium devices (tablets, small laptops)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 577, // Small devices (phones)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const coashList = [
    {
      name: "Jane Cooper",
      title: "CROSSFIT COACH",
      image: GalleryImg,
    },
    {
      name: "Brooklyn Simmons",
      title: "CROSSFIT COACH",
      image: GalleryImg2,
    },
    {
      name: "Savannah Ngueyen",
      title: "CROSSFIT COACH",
      image: GalleryImg3,
    },
    {
      name: "Kathryn Murphy",
      title: "CROSSFIT COACH",
      image: GalleryImg4,
    },
  ];

  return (
    <section className="coaches">
      <div className="coaches__container wrapper">
        <h1 className="coaches__container__heading">Our Best Coaches</h1>
        <p className="coaches__container__introduction">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
          aspernatur in quod illo iure nobis dolores tempore voluptas molestiae
          ducimus deserunt error, labore explicabo tempora nesciunt possimus
          quam nihil consequatur adipisci? Consequatur quas reiciendis incidunt?
        </p>
        <div className="coaches__container__slider">
          <Slider {...settings}>
            {coashList.map((coach) => (
              <div className="coaches__container__slider__slide">
                <img src={coach.image} alt="" />
                <h3 className="coaches__container__slider__slide__name">
                  {coach.name}
                </h3>
                <p className="coaches__container__slider__slide__title">
                  {coach.title}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
