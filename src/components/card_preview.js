import React from "react";
import {
  Col,
  Row
} from "reactstrap";

function CardPreview() {
  return (
    <Row>
      <Col className="card-container" sm="4">
        <div className="card">
          <a className="shadow" href="worldweb">
            <div className="card--display">
              <i className="material-icons">public</i>
              <h2>World Wide Web</h2>
            </div>
            <div className="card--hover">
              <h2>World Wide Web</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                at est orci. Nam molestie pellentesque mi nec lacinia. Cras
                volutpat arcu sit amet elit sodales, nec volutpat velit
                bibendum.
              </p>
              <p className="link">Click to see project</p>
            </div>
          </a>
          <div className="card--border" />
        </div>
      </Col>
      <Col className="card-container" sm="4">
          <div className="card">
            <a className="shadow" href="trainthings">
              <div className="card--display">
                <i className="material-icons">train</i>
                <h2>Why I Hate Trains</h2>
              </div>
              <div className="card--hover">
                <h2>Why I Hate Trains</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam at est orci. Nam molestie pellentesque mi nec lacinia.
                  Cras volutpat arcu sit amet elit sodales, nec volutpat velit
                  bibendum.
                </p>
                <p className="link">Click to see project</p>
              </div>
            </a>
            <div className="card--border" />
          </div>
      </Col>
      <Col className="card-container" sm="4">
        <div className="card">
          <a className="shadow" href="worldweb">
            <div className="card--display">
              <i className="material-icons">public</i>
              <h2>World Wide Web</h2>
            </div>
            <div className="card--hover">
              <h2>World Wide Web</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                at est orci. Nam molestie pellentesque mi nec lacinia. Cras
                volutpat arcu sit amet elit sodales, nec volutpat velit
                bibendum.
              </p>
              <p className="link">Click to see project</p>
            </div>
          </a>
          <div className="card--border" />
        </div>
      </Col>
    </Row>
  );
}
export default CardPreview;
