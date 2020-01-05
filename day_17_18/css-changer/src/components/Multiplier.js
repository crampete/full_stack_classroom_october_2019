import React from "react";

class Multiplier extends React.Component {
  render() {
    var PassedComponent = this.props.abc;
    return (
      <div>
        <PassedComponent />
        <PassedComponent />
        <PassedComponent />
      </div>
    );
  }
}

export default Multiplier;
