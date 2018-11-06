import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';
import { getSelect_Rate } from '../../redux/actions/getSelect_Rate';

class SelectRate extends Component {
  constructor() {
    super();
    this.state = {
      base: 'GBP'
    }
  }

  componentDidMount() {
    this.props.getSelect_Rate();
  }

  render() {

    const { base } = this.state;
    
    //Option Dropdown List
    const { selectRate } = this.props.selectRate;
    //typeof(selectRate) Obj
    const option = Object.keys(selectRate).map(i => <option key={i}>{i}</option>)


    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Change base Rate: 
            <select
              value= {this.state.base}
              // onChange={this.onChange}
              >
              <option 
                defaultValue={base}>
                {base}
              </option>
              {option}
            </select>
          </label>
          <button 
            className='live' 
            type='submit' 
            value='Submit'>
            submit
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectRate: state.selectRate
})

export default connect(mapStateToProps, { getSelect_Rate })(SelectRate)

