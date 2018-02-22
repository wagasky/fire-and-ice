import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import PropTypes, { string } from 'prop-types';
import { getHouses } from '../../helper/apiCalls.js'


export class HouseDisplay extends Component {

  async componentDidMount() {
    await getHouses();
  }

  render() {
    return (
      <div className='HouseDisplay'>
        <p>I'm the HouseDisplay</p>
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