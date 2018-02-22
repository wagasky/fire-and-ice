import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import PropTypes, { string } from 'prop-types';


export class HouseDisplay extends Component {

  render() {
    return (
      <div className='HouseDisplay'>
      </div>
    );
  }
}

HouseDisplay.propTypes = {
// add propTypes
};

const mapStateToProps = ({ fake }) => ({ fake });
const mapDispatchToProps = dispatch => ({ fakeAction:
  () => dispatch(fakeAction())
});
export default connect(mapStateToProps, mapDispatchToProps)(HouseDisplay);