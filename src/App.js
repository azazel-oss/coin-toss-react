import React, { Component } from "react";
import "./App.css";
import Coin from "./Coin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numHeads: 0,
      numTails: 0,
      coinFace: "",
    };
  }
  coinToss() {
    const face = Math.floor(Math.random() * 2) ? "Heads" : "Tails";
    this.setState({
      coinFace: face,
    });
    if (face === "Heads") {
      this.setState((state, props) => {
        return {
          numHeads: state.numHeads + 1,
        };
      });
    } else {
      this.setState((state, props) => {
        return {
          numTails: state.numTails + 1,
        };
      });
    }
  }
  handleEvent(e) {
    this.coinToss();
  }
  render() {
    this.handleEvent = this.handleEvent.bind(this);
    return (
      <div className="App">
        <h2>Let's flip a coin</h2>
        {this.state.numHeads + this.state.numTails !== 0 && (
          <Coin face={this.state.coinFace} />
        )}

        <button className="btn-toss" onClick={this.handleEvent}>
          Flip me!!!
        </button>
        {this.state.numHeads + this.state.numTails !== 0 && (
          <p>
            Out of {this.state.numHeads + this.state.numTails} flips, there have
            been {this.state.numHeads} heads and {this.state.numTails} tails.
          </p>
        )}
      </div>
    );
  }
}

export default App;
