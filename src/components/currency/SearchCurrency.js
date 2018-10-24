import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';
import { submitRate } from '../../redux/actions/submitRateAction';

//common
import isEmpty from '../common/isEmpty';

class SearchCurrency extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      error: {}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  };

  onSubmit(e) {
    e.preventDefault();
    if(isEmpty(this.state.text)) {
      //do error here
    } else {
      this.props.submitRate(this.state.text);
    }

    this.setState({ text: '' });
  }

  onChange(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='text'
            value={this.state.text}
            onChange={this.onChange}
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { submitRate })(SearchCurrency)
