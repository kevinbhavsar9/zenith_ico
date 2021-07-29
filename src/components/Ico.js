import React, { Component } from "react";
import ico from "../assets/ico.png";

class Ico extends Component {
  render() {
    return (
      <div className="container py-5 row">
        <div style={{ width: "45%" }}>
          <h2 className="text-light">
            We’ve built a platform to do well out of stakeholders.
          </h2>
          <p className="text-secondary p-big">
            Zenith TOKEN is a Zenith Chian initiative that takes its power from
            Zenith chain. The purpose of existence is to provide funds for the
            project and initiative ecosystem created. For this reason, Zenith
            Token will provide funding support to Zenith initiatives, not just
            to be traded in the markets. This shows that there is always an
            infinite transformation for Zenith TOKEN. When you, our esteemed
            stakeholders, have Zenith TOKEN, you will also support many project
            owners and entrepreneurs. In addition, we plan to offer many ways to
            obtain Zenith TOKEN for you and continue our work on it. You will be
            able to earn Zenith TOKEN with our games in development and various
            competitions. Our aim is to always make Zenith TOKEN valuable in an
            endless cycle and to provide future profits to our investors. With
            the ecosystem we have created, you can buy, exchange, earn and sell
            Zenith TOKEN.
          </p>
        </div>
        <div className="px-1">
          <img src={ico} style={{ width: 550 }} />
        </div>
      </div>
    );
  }
}

export default Ico;
