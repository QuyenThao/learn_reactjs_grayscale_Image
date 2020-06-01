import React, { Component } from "react";

export default function(WrapedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isGrayScale: false
      };
    }

    onMouseEnter() {
      this.setState({
        isGrayScale: true
      });
    }

    onMouseLeave() {
      this.setState({
        isGrayScale: false
      });
    }

    render() {
      return (
        <div
          style={{
            filter: `grayscale(${this.state.isGrayScale ? 1 : 0})`
          }}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)}
        >
          <WrapedComponent {...this.props} />
        </div>
      );
    }
  };
}
