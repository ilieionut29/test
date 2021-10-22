import React, { Component } from "react";


class Blog extends Component {
  render() {
    return (
      <div className="wrapper">
        <aside className="side-content">
          <h2 className="logo">
            EO/
          </h2>
          <i id="toggle-btn" className="fa fa-chevron-down fa-lg" aria-label="menu-button" role="button" onclick="toggleMenu()" />
          <nav id="nav-menu-js" className="nav-menu">
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">News</a>
            <a href="#" className="nav-link">Shop</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>       
          <nav id="mobile-menu-js" className="mobile-menu" style={{display: 'none'}}>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">News</a>
            <a href="#" className="nav-link">Shop</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
          <div id="categories-js" className="categories">
            <h2 className="category">Fashion</h2>
            <h2 className="category">Beauty</h2>
            <h2 className="category">Print</h2>
            <h2 className="category">Branding</h2>
            <h2 className="category">Digital</h2>
            <h2 className="category">Pattern</h2>
            <h2 className="category">Music</h2>
          </div>
        </aside>
        <main className="main-content">
          <div className="column-one column">
            <img src="http://res.cloudinary.com/dm7uillhl/image/upload/s--9ezO-iN5--/q_jpegmini:1/v1527069128/photo-1482263448015-c6b14d636e0a_fbcwdn_sstr93.jpg" alt="Two women walking past each other" className="image" />
            <img src="http://res.cloudinary.com/dm7uillhl/image/upload/s--MvWW7YXW--/q_jpegmini:1/v1527069132/photo-1492633342445-8408e4c17712_awp3mp_vz3cc5.jpg" alt="Girl with a flower crown" className="image" />
            <img src="http://res.cloudinary.com/dm7uillhl/image/upload/s--iGqqJkvI--/q_jpegmini:1/v1527069132/photo-1499013819532-e4ff41b00669_gcjl4y_nmpeyk.jpg" alt="A pair of beige trainers" className="image" />
            <img src="http://res.cloudinary.com/dm7uillhl/image/upload/s--TuYf6wQo--/q_jpegmini:1/v1527069128/paper-3146952_960_720_a7lglm_yrwuhi.jpg" alt="Notepads and pens" className="image" />
            <img src="http://res.cloudinary.com/dm7uillhl/image/upload/s--XQGQ4-3K--/q_jpegmini:1/v1527069130/pexels-photo-893896_q6vqn4_qv9ord.jpg" alt="A laptop, notepads, memo pad and cactus on a blue desk" className="image" />
          </div>
          <div className="column-two column">
            <img src="http://res.cloudinary.com/dm7uillhl/image/upload/s--D0jb7ZfY--/q_jpegmini:1/v1527069129/pexels-photo-838423_hriono_zbxhbw.jpg" alt="Pink tiles" className="image" />
            <img src="http://res.cloudinary.com/dm7uillhl/image/upload/s--tSiWDSOy--/q_jpegmini:1/v1527069132/photo-1519763421920-f2d769e01a37_qnr50f_tuptz8.jpg" alt="A girl wearing glasses sitting on stairs" className="image" />
            <img src="http://res.cloudinary.com/dm7uillhl/image/upload/s--LKnlDFz7--/q_jpegmini:1/v1527069132/photo-1506976802331-7f6a56eee0f0_utyk5p_ofxbxb.jpg" alt="Girl in red cap standing in front of yellow and blue wall" className="image" />
            <img src="http://res.cloudinary.com/dm7uillhl/image/upload/s--PFh8MQ4B--/q_jpegmini:1/v1527069130/photo-1505204144504-0a48bd7862ee_ihdjtk_zcdupl.jpg" alt="Girl in smart attire standing in front of striped wall" className="image" />
          </div>
          <div className="column-three column">
            <img src="http://res.cloudinary.com/dm7uillhl/image/upload/s--Tlgn-5DV--/q_jpegmini/v1527069132/photo-1518382473172-c5b406fe7efd_nh5gqu_ae944m.jpg" alt="Black girl with an afro" className="image" />
            <img src="http://res.cloudinary.com/dm7uillhl/image/upload/s--zQ5McgQs--/q_jpegmini:1/v1527069130/photo-1492707892479-7bc8d5a4ee93_nrhzb7_sg2808.jpg" alt="Beauty products spilling out of a black sidebag" className="image" />
            <img src="http://res.cloudinary.com/dm7uillhl/image/upload/s--_sFt8kAZ--/q_jpegmini:1/v1527069130/photo-1496775162873-064fc81ef366_iieixm_lcm9p0.jpg" alt="Vogue magazines on top of white bedsheets" className="image" />
          </div>
        </main>
      </div>
    )
  
  }
}
export default Blog;
