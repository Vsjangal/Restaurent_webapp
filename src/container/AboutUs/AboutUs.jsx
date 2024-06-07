import React, { useState } from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  const [know, setKnow] = useState(false);
  const [value, setValue] = useState("More");
  const [value1, setValue1] = useState("More");
  const [know1, setKnow1] = useState(false);
  function handleClick() {
    setKnow(!know);
    setValue(() => {
      if (know) {
        setValue("More");
      } else {
        setValue("Less");
      }
    });
  }
  function handleClick1() {
    setKnow1(!know1);
    setValue1(() => {
      if (know1) {
        setValue1("More");
      } else {
        setValue1("Less");
      }
    });
  }
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img
          src={images.G}
          alt="g letter"
        />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img
            src={images.spoon}
            alt="about_spoon"
            className="spoon__img"
          />
          <p className="p__opensans">
            At Gourmet Heaven, our story is a celebration of flavors,
            traditions, and a commitment to serving exquisite cuisine. Join us
            as we embark on a culinary adventure rooted in heritage and
            innovation.
          </p>
          {know && (
            <p className="p__opensans">
              Gourmet Heaven, where culinary dreams come to life. Founded with a
              passion for exquisite flavors and impeccable service, we aim to
              delight every palate that graces our tables. Welcome to a world
              where every meal is a journey of taste and refinement.
            </p>
          )}
          <button
            type="button"
            className="custom__button"
            onClick={handleClick}
          >
            Know {value}
          </button>
        </div>

        <div className="app__aboutus-content_knife flex__center">
          <img
            src={images.knife}
            alt="about_knife"
          />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img
            src={images.spoon}
            alt="about_spoon"
            className="spoon__img"
          />
          <p className="p__opensans">
            Welcome to Gourmet Heaven, where culinary excellence meets warm
            hospitality. Explore our passion for fine dining and discover the
            rich history behind our culinary journey.
          </p>
          {know1 && (
            <p className="p__opensans">
              From humble beginnings in a small kitchen to becoming a beacon of
              culinary excellence, Gourmet Heaven's journey is a testament to
              dedication, creativity, and a relentless pursuit of perfection.
              Since [year of establishment], we have been crafting unforgettable
              dining experiences, blending tradition with innovation to create a
              legacy of flavor that stands the test of time.
            </p>
          )}
          <button
            type="button"
            className="custom__button"
            onClick={handleClick1}
          >
            Know {value1}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
