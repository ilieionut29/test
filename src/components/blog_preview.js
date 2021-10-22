import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";


function BlogPreview() {
  return (
  <Container className="blogTiles">
		<div className="">
			<h2>Blogs <span>Archive</span></h2>
			<Row className="row">
				<Col className="col-sm-8 col-md-6">
					<a href="#" className="black tile">
						<div className="tileContentFirst">
							<h3>Most Recent Test Post</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat porta ex, sed ullamcorper ipsum lacinia nec.<span>...</span></p>
						</div>
						<div className="tileOverlay">
							<span>Read More</span>
						</div>
					</a>
				</Col>
				<Col className="col-sm-4 col-md-3">
					<a href="#" className="tile">
						<div className="tileImage">
							<img className="img-responsive img-fluid" src="https://source.unsplash.com/Z1tWLxk7krs/1080x700" />
						</div>
						<div className="tileContent">
							<h3>Testing Posts Yo</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat porta ex, sed ullamcorper ipsum lacinia nec.<span>...</span></p>
						</div>
						<div className="tileOverlay">
							<span>Read More</span>
						</div>
					</a>
				</Col>
				<Col className="col-sm-4 col-md-3">
					<a href="#" className="tile">
						<div className="tileImage">
							<img className="img-responsive img-fluid" src="https://source.unsplash.com/GnU2altkUSQ/1080x700" />
						</div>
						<div className="tileContent">
							<h3>Filler Post Dude</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat porta ex, sed ullamcorper ipsum lacinia nec.<span>...</span></p>
						</div>
						<div className="tileOverlay">
							<span>Read More</span>
						</div>
					</a>
				</Col>
			</Row>
		</div>
	</Container>
  );
}
export default BlogPreview;