import React, { Component } from "react";

class TokenSale extends Component {
  render() {
    return (
      <div className="container text-light py-3">
        <h1 className="text-center">TOKEN SALE</h1>
        <p className="text-center p-big">
          SIF TOKEN FIRST SALES ON ICO PLATFORM. TOTAL PRE-SALES 2,100,000 SIF
        </p>
        <div className="row" style={{ justifyContent: "space-around" }}>
          <ul className="mx-3">
            <li>
              <p className="p-big">Start</p>
              <p className="p-big text-info">May 16, 2021 (9:00PM GMT)</p>
            </li>
            <li>
              <p className="p-big">End</p>
              <p className="p-big text-info">Oct 04, 2021 (08:30PM GMT)</p>
            </li>
            <li>
              <p className="p-big">Acceptable currencies</p>
              <p className="p-big text-info">BTC, ETH, BNB, USDT, USDC, TRX</p>
            </li>
          </ul>
          <ul className="mx-3">
            <li>
              <p className="p-big">Number of tokens for sale</p>
              <p className="p-big text-info">2,100,000 ZTC</p>
            </li>
            <li>
              <p className="p-big">Tokens exchange rate</p>
              <p className="p-big text-info">1 ZTC=$1.800</p>
            </li>
            <li>
              <p className="p-big">Minimal transaction amount</p>
              <p className="p-big text-info">1000 ZTC</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TokenSale;
