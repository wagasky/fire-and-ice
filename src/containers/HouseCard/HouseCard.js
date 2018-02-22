import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { string } from 'prop-types';

export class HouseCard extends Component {


  render() {
    return (
      <div className='Card'>
        <p>I'm a house</p>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  houses: store.houses
})

// const mapDispatchToProps = (dispatch) => ({
// not sure that I'm going to need dispatch at all
// })

export default connect(mapStateToProps, null)(HouseCard)