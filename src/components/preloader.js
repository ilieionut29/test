import React, { useState } from "react";
import { Container } from "reactstrap";


function PreLoader() {
  const [loading, setLoading] = useState(true);

  return (
    loading && (
        <Container className="container-staycool">
          <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 -2 112.748 246.22">
            <lineargradient
              id="popsicle-gradient"
              gradientunits="userSpaceOnUse"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
              gradientTransform="rotate(45) scale(2)">
              <stop
                offset="0%"
                stop-color="hsl(180, 100%, 50%)"
                stop-opacity="1"
              />
              <stop
                offset="19%"
                stop-color="hsl(180, 100%, 50%)"
                stop-opacity="1"
              />
              <stop
                offset="20%"
                stop-color="hsl(100, 100%, 50%)"
                stop-opacity="1"
              />
              <stop
                offset="39%"
                stop-color="hsl(100, 100%, 50%)"
                stop-opacity="1"
              />
              <stop
                offset="40%"
                stop-color="hsl(305, 100%, 75%)"
                stop-opacity="1"
              />
              <stop
                offset="59%"
                stop-color="hsl(305, 100%, 75%)"
                stop-opacity="1"
              />
              <stop
                offset="60%"
                stop-color="hsl(250, 100%, 65%)"
                stop-opacity="1"
              />
              <stop
                offset="79%"
                stop-color="hsl(250, 100%, 65%)"
                stop-opacity="1"
              />
              <stop
                offset="80%"
                stop-color="hsl(60, 100%, 50%)"
                stop-opacity="1"
              />
              <stop
                offset="100%"
                stop-color="hsl(60, 100%, 50%)"
                stop-opacity="1"
              />
            </lineargradient>
            <path d="M56.374 0C25.143 0 0 23.65 0 53.028v126.43c0 4.793 4.102 8.652 9.198 8.652h35.604v44.654c0 4.684 5.16 8.456 11.571 8.456 6.41 0 11.572-3.772 11.572-8.456V188.11h35.605c5.095 0 9.198-3.86 9.198-8.652V53.028C112.748 23.651 87.605 0 56.374 0z" />
          </svg>
          <div className="text" data-splitting="">
            Stay cool...
          </div>
        </Container>

    )
  );
}
export default PreLoader;
