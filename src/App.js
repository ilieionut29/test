import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Container } from "reactstrap";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import SideNav from "./components/side_nav";

//Components
import { ParticlesContainer } from "./components/particles";
import MenuBar from "./components/menu_bar";
import ScrollToTop from "./components/scroll_top";
import DownArrow from "./components/down_arrow";
import Footer from "./components/footer";
import PreLoader from "./components/preloader";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/services", name: "Services", Component: Services },
  { path: "/works", name: "Works", Component: Works },
  { path: "/blog", name: "Blog", Component: Blog }
];

//Not gunna lie, I've  missed you since i've said goodbye.
class App extends Component {
  render() {
    return (
      <Container className="main_container px-0 mx-0">
        <Router>
          <ScrollToTop>
            <Route
              render={({ location }) => {
                return (
                  <Container
                    className="Responsive-Wrapper px-0 mx-0"
                    fluid={true}>
                    {routes.map(({ path, Component }) => (
                      <Route key={path} exact path={path}>
                        {({ match }) => (
                          <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames="page"
                            unmountOnExit>
                            <Container className="page px-0" fluid={true}>
                              <ParticlesContainer />
                              <MenuBar />
                              <SideNav />
                              <div className="page-wrapper my-5">
                                <Component />
                              </div>
                              <Footer />
                            </Container>
                          </CSSTransition>
                        )}
                      </Route>
                    ))}
                  </Container>
                );
              }}
            />
          </ScrollToTop>
        </Router>
      </Container>
    );
  }
}

export default App;
