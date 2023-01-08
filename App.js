import React from "react";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    console.warn("Constructor");
    this.state = {
      name: "Abhimanyu",
    };
  }
  componentDidMount() {
    console.warn("componentDidMount");
  }

  render() {
    console.log("render");

    return (
      <div className="App">
        <h1>Component Did Mount {this.state.name} </h1>
        <button
          onClick={() => {
            this.setState({ name: "Abhimanyu Kumar" });
          }}
        >
          Update Name
        </button>
      </div>
    );
  }
}

export default App;
