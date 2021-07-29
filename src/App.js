import "./App.scss";
import React, { Component } from "react";
import Navbar from "./components/Navabar";
import NavMenu from "./components/NavbarMenu";
import Partner from "./components/Partner";
import Hero from "./components/Hero";
import Ico from "./components/Ico";
import Footer from "./components/Footer";
import MediaCard from "./components/icoNews";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      NavMenu: false,
      Team: false,
      data: {},
      darkMode: true,
    };
  }
  handleChangeState = (val) => {
    this.setState({ ...this.state, NavMenu: val });
  };
  render() {
    const { darkMode } = this.state;
    return (
      <div className="App">
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
        <Partner />
        <Footer darkMode={darkMode} />
      </div>
    );
  }
}
