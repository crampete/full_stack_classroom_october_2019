import React from "react";
import "./style.css";

class LiveCSS extends React.Component {
  state = {
    width: "150px",
    height: "150px",
    backgroundColor: "#95adbe"
  };

  changeCSS = () => {
    this.setState({
      height: "400px",
      width: "300px",
      backgroundColor: "yellow"
    });
  };

  handleChange = e => {
    var propertyName = e.target.name;
    console.log(propertyName);
    console.log("New value:- ", e.target.value);
    this.setState({
      [propertyName]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Controls</h1>

        <button
          className={`button-${this.props.buttonStyle}`}
          onClick={this.changeCSS}
        >
          Click Me
        </button>

        <div>
          <label>Height</label>
          <input
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Width</label>
          <input
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Background Colour</label>
          <input
            name="backgroundColor"
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          />
        </div>

        <div
          id="target-box"
          style={{
            width: this.state.width,
            height: this.state.height,
            backgroundColor: this.state.backgroundColor
          }}
        ></div>
      </div>
    );
  }
}

export default LiveCSS;
