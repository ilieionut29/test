import React from "react";
import { Container, Row, Col } from "reactstrap";
var ReactRotatingText = require("react-rotating-text");

function TypistAnim() {
  return (
        <div className=" typist my-2">
          <h2>
            A Full-Stack Developer. Who specializes in <br/>
            <ReactRotatingText
              items={[
                " Web Development ",
                " Graphic Design ",
                " Digital Marketing & Branding ",
                " Multimedia Art Production "
              ]}
              color="#69DDFF"
            />
          </h2>
        </div>

  );
}
export default TypistAnim;
