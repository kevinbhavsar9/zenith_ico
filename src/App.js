import "./App.scss";
import Particles from "react-tsparticles";
import React, { Component } from "react";
import Navbar from "./components/Navabar";
import NavMenu from "./components/NavbarMenu";
import Partner from "./components/Partner";
import Hero from "./components/Hero";
import Ico from "./components/Ico";
import Footer from "./components/Footer";
import MediaCard from "./components/icoNews";
import "./styles/Mobile.scss";
import Timeline from "./components/Timeline";
import TokenSale from "./components/TokenSale";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      NavMenu: false,
      Team: false,
      data: {},
      darkMode: true,
    };
    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }
  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }
  particlesLoaded(container) {
    console.log(container);
  }
  handleChangeState = (val) => {
    this.setState({ ...this.state, NavMenu: val });
  };
  render() {
    const { darkMode } = this.state;
    return (
      <>
        <div className="App">
          <Particles
            id="tsparticles"
            init={this.particlesInit}
            loaded={this.particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#171429",
                },
              },
              fpsLimit: 60,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  // onHover: {
                  //   enable: true,
                  //   mode: "repulse",
                  // },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />
          {this.state.NavMenu && (
            <NavMenu
              handleChangeState={this.handleChangeState}
              darkMode={darkMode}
            />
          )}
          <Navbar
            NavMenu={this.state}
            handleChangeState={this.handleChangeState}
            darkMode={darkMode}
            darkModeFunc={this.handleDarkModeChangeState}
          />
          <Hero />
          <Ico />
          <MediaCard />
          <Timeline />
          <TokenSale />
          <Partner />
          <Footer darkMode={darkMode} />
        </div>
      </>
    );
  }
}

//build on zenith chain
