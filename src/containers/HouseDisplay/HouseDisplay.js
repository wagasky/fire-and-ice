import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import PropTypes, { string } from 'prop-types';
import { getHouses } from '../../helper/apiCalls';
import { loadHouses } from '../../actions/index'

export class HouseDisplay extends Component {

  async componentDidMount() {
   
    const houses = await getHouses();
    // debugger
    await this.props.loadHouses();

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

const mapStateToProps = (store) => ({ 
  houses: store.houses
});

const mapDispatchToProps = (dispatch) => ({ 
  loadHouses: (houses) => dispatch(loadHouses(houses))
});

export default connect(mapStateToProps, mapDispatchToProps)(HouseDisplay);

