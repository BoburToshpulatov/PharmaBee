import React from "react";
import { useState } from "react";
import {
  BackgroundImg,
  BackgroundText,
  HomeDirect,
  TestimonialsMain,
  TestimonialsMainText,
  TestimonialsPeople,
  TestimonialsPeople2,
  TestimonialsPeople3,
  TestimonialsPeopleLeft,
  TestimonialsPeopleRight,
  TestimonialsSecondary,
} from "./testimonialsStyle";
import scientist from "../../../assets/testimonials/background.png";
import polygon from "../../../assets/testimonials/bg-polygon (6).svg";
import jody from "../../../assets/home-img/jody.png";
import gene from "../../../assets/home-img/gene.png";
import people1 from "../../../assets/testimonials/people1.png";
import people2 from "../../../assets/testimonials/people2.png";
import people3 from "../../../assets/testimonials/people3.png";
import people4 from "../../../assets/testimonials/people4.png";
import people5 from "../../../assets/testimonials/people5.png";
import people6 from "../../../assets/testimonials/people6.png";

const TestimonialComponent = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  return (
    <>
      <BackgroundImg>
        <img src={scientist} alt="background-img" />
        <BackgroundText>
          <h1>Testimonials</h1>
          <HomeDirect>
            <span>
              <i className="fas fa-home"></i>
            </span>
            <p style={{ marginLeft: "-5px" }}>Home</p>
            <span>
              <i
                style={{ marginTop: "9px", fontSize: "30px" }}
                className="material-icons"
              >
                keyboard_arrow_right
              </i>
            </span>
            <p>Testimonials</p>
          </HomeDirect>
        </BackgroundText>
      </BackgroundImg>

      <TestimonialsMain>
        <img
          style={{ position: "absolute", alignSelf: "flex-start" }}
          src={polygon}
          alt="polygon-img"
        />
        <TestimonialsSecondary>
          <TestimonialsMainText>
            <h2>Customer’s Testimonials</h2>
            <h1>Testimonials</h1>
            <p>
              Risus turpis blandit tellus orci a. Vel quam lobortis ut nibh
              pretium eu leo. Blandit nibh pharetra viverra velit celerisque sit
              id volutpat.
            </p>
          </TestimonialsMainText>
          <TestimonialsPeople>
            <TestimonialsPeopleLeft className="float1 _anim-items _anim-no-hide">
              <p>
                Augue Sed viverra nulla Interdum mia bibendum velit sapien
                scelerisqu ictum quam tincidunt nec feugiat augue tincidunt.
                Etiam pretium diam rhoncus. gida turpis cursus. Nuncsed
                fringilla tortor iaculis eget
              </p>
              <h1>Jody Andrews</h1>
              <p className="job">Project Manager</p>
              <img src={jody} alt="woman-img" />
            </TestimonialsPeopleLeft>
            <TestimonialsPeopleRight className="float2 _anim-items _anim-no-hide">
              <p>
                Augue Sed viverra nulla Interdum mia bibendum velit sapien
                scelerisqu ictum quam tincidunt nec feugiat augue tincidunt.
                Etiam pretium diam rhoncus. gida turpis cursus. Nuncsed
                fringilla tortor iaculis eget
              </p>
              <h1>Gene Green</h1>
              <p className="job">Business Analysist</p>
              <img src={gene} alt="woman-img" />
            </TestimonialsPeopleRight>
          </TestimonialsPeople>
        </TestimonialsSecondary>
        <TestimonialsPeople2>
          <TestimonialsPeopleLeft className="float1 _anim-items _anim-no-hide">
            <p>
              Augue Sed viverra nulla Interdum mia bibendum velit sapien
              scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam
              pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor
              iaculis eget
            </p>
            <h1>Oscar Edwards</h1>
            <p className="job">Executive Assistant</p>
            <img src={people1} alt="woman-img" />
          </TestimonialsPeopleLeft>
          <TestimonialsPeopleRight className="float2 _anim-items _anim-no-hide">
            <p>
              Augue Sed viverra nulla Interdum mia bibendum velit sapien
              scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam
              pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor
              iaculis eget
            </p>
            <h1>Amina Jordon</h1>
            <p className="job">Store Manager</p>
            <img src={people2} alt="woman-img" />
          </TestimonialsPeopleRight>
        </TestimonialsPeople2>

        <TestimonialsPeople3>
          <TestimonialsPeopleLeft className="float1 _anim-items _anim-no-hide">
            <p>
              Augue Sed viverra nulla Interdum mia bibendum velit sapien
              scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam
              pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor
              iaculis eget
            </p>
            <h1>Natalia Thompson</h1>
            <p className="job">Accounting Staff</p>
            <img src={people3} alt="woman-img" />
          </TestimonialsPeopleLeft>
          <TestimonialsPeopleRight className="float2 _anim-items _anim-no-hide">
            <p>
              Augue Sed viverra nulla Interdum mia bibendum velit sapien
              scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam
              pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor
              iaculis eget
            </p>
            <h1>Jack Peterson</h1>
            <p className="job">Office Manager</p>
            <img src={people4} alt="woman-img" />
          </TestimonialsPeopleRight>
        </TestimonialsPeople3>

        <TestimonialsPeople3>
          <TestimonialsPeopleLeft className="float1 _anim-items _anim-no-hide">
            <p>
              Augue Sed viverra nulla Interdum mia bibendum velit sapien
              scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam
              pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor
              iaculis eget
            </p>
            <h1>Simon Davis</h1>
            <p className="job">Customer Support</p>
            <img src={people5} alt="woman-img" />
          </TestimonialsPeopleLeft>
          <TestimonialsPeopleRight className="float2 _anim-items _anim-no-hide">
            <p>
              Augue Sed viverra nulla Interdum mia bibendum velit sapien
              scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam
              pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor
              iaculis eget
            </p>
            <h1>Tiana Watson</h1>
            <p className="job">Operation Manager</p>
            <img src={people6} alt="woman-img" />
          </TestimonialsPeopleRight>
        </TestimonialsPeople3>
      </TestimonialsMain>
    </>
  );
};

export default TestimonialComponent;
