import React from "react";

import Header from "./hiit-workout-header.jpg";
import Workout from "./workout.jpg";
import Workout2 from "./workout2.jpg";

import "./About.scss";

const About = () => {
  return (
    <div className="about wrapper">
      <h1>About Our Gym</h1>
      <img src={Header} alt="" className="about__header" />
      <div className="about__description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt fugit
          distinctio quasi, nesciunt similique blanditiis recusandae nulla, unde
          sequi earum debitis sint doloremque vero. Quam quos quo sed! Doloribus
          adipisci sapiente tempora. Eum repudiandae tempora quidem, ut dolores
          provident tenetur possimus molestiae odio!
        </p>
        <button>10 Years</button>
      </div>
      <div className="about__introduction">
        <div className="about__introduction__images">
          <div className="about__introduction__images__container">
            <img src={Workout} alt="Workout Men" />
          </div>
          <div className="about__introduction__images__container">
            <img src={Workout2} alt="Workout Women" />
          </div>
        </div>
        <div className="about__introduction__text">
          <div>
            <h2>
              <span className="about__introduction__text__highlight">
                Lorem ipsum
              </span>{" "}
              dolor sit amet
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              amet neque nulla totam, praesentium voluptatum.
            </p>
          </div>
          <div>
            <h2>
              <span className="about__introduction__text__highlight">
                Lorem ipsum
              </span>{" "}
              dolor sit amet
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              amet neque nulla totam, praesentium voluptatum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
