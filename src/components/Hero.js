import React, { Component } from "react";
import "../styles/Hero.scss";
import coin from "../assets/Subtract.svg";
import { Facebook } from "@material-ui/icons";
import { YouTube } from "@material-ui/icons";
import { Telegram } from "@material-ui/icons";
import { Twitter } from "@material-ui/icons";

class Hero extends Component {
  render() {
    return (
      <div className="container py-1">
        <div className="row">
          <div className="heroChild1 col">
            <img src={coin} />
            <h1 className="text-light">
              The Hybrid Smart Chain for Extensive Use
            </h1>
            <p className="text-secondary p-big" style={{ marginTop: -20 }}>
              ZenithChain is a digital peer to peer network
            </p>
            {/* <button className="btn">SIGN UP TO JOIN</button> */}
            <div className="py-2">
              <Facebook className="text-light px-1" />
              <Telegram className="text-light px-1" />
              <Twitter className="text-light px-1" />
              <YouTube className="text-light px-1" />
            </div>
          </div>
          <div className="heroChild2 px-7">
            <div>
              <div
                className="text-light p-bigger"
                style={{ textAlign: "center" }}
              >
                LIVE PRE-SALE RATE
              </div>
              <div
                className="text-info p-bigger"
                style={{ textAlign: "center" }}
              >
                {" "}
                1 ZTC=1.00$
              </div>
            </div>
            <div className="row time">
              <div>
                <h1 className="text-light">
                  10<span>:</span>
                </h1>
                <p className="text-secondary p-big">Days</p>
              </div>

              <div>
                <h1 className="text-light">
                  06<span>:</span>
                </h1>
                <p className="text-secondary p-big">Hours</p>
              </div>

              <div>
                <h1 className="text-light">
                  45<span>:</span>
                </h1>
                <p className="text-secondary p-big">Min</p>
              </div>

              <div>
                <h1 className="text-light">33</h1>
                <p className="text-secondary p-big">Sec</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
