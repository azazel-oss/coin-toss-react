import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  render() {
    const url =
      this.props.face === "Heads"
        ? "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"
        : "https://www.nicepng.com/png/full/146-1464848_quarter-tail-png-tails-on-a-coin.png";
    return (
      <div>
        <img className="coin-img" alt={this.props.face} src={url} />
      </div>
    );
  }
}

export default Coin;
