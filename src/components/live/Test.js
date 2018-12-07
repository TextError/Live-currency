

import React, { Component } from "react";

class SampleComponent extends Component {
  state = {
    clickedOutside: false
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  myRef = React.createRef();

  handleClickOutside = e => {
    if (!this.myRef.current.contains(e.target)) {
      this.setState({ clickedOutside: true });
    }
  };

  handleClickInside = () => this.setState({ clickedOutside: false });

  render() {
    return (
      <button ref={this.myRef} onClick={this.handleClickInside}>
        {this.state.clickedOutside ? "Bye!" : "Hello!"}
      </button>
    );
  }
}

export default SampleComponent;