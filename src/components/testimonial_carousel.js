import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import { ReactComponent as QuoteIcon } from "../assets/images/left-quote-sketch.png";
import { ReactComponent as ResponsiveIcon } from "../assets/images/programming.svg";

const items = [
  {
    id: 1,
    percent: "61%",
    stat:
      "of users are unlikely to return to a site if they had trouble accessing it and 40% visit a competitor’s site instead ",
    quote: " Accessibility lies at the heart of responsive design. Websites that are difficult to navigate provide poor accessibility which leads users to seek out alternative options. ",
    author: "Slide 1",
    img: "https://image.flaticon.com/icons/svg/2471/2471944.svg"
  },
  {
    id: 2,
    percent: "94%",
    stat:
      " of all first impressions on a website are design-related ",
    quote:
      " Amazing design is all around us. It’s inevitable! If we take a look at the design and layout of the Fortune 500 companies, we will find out for a fact that they are all gorgeous. ",
    author: "Slide 2",
    img: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  },
  {
    id: 3,
    percent: "8 out of 10",
    stat:
      " customers would stop engaging with content that doesn’t display well on their device",
    quote:
      " All the traffic in the world doesn’t matter if a website isn’t ready to give that traffic what it’s looking for. A website that requires pinching and zooming is no longer just a small inconvenience to its users, it’s an automatic “no.” While responsive design is not yet featured on as many websites as it should be, it’s still out there—and users will search until they find it rather than settling for a bad website. ",
    author: "Slide 3",
    img: "https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg"
  }
];

const Testimonials = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        className="quote-carousel"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}>
        <div className="items">
          <blockquote>
            <Row>
              <Col sm={{ size: 8, offset: 2 }}>
                <h1 className="text-bright">{item.percent}</h1>
                <div className="card shadow rounded p-4 mb-4">
                <h2>{item.stat}</h2>
                <p>{item.quote}</p>
                </div>
              </Col>
            </Row>
          </blockquote>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
export default Testimonials;
