import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { string } from 'prop-types';
import { getHouses } from '../../helper/apiCalls';
import { loadHouses } from '../../actions/index';
import HouseCard from '../HouseCard/HouseCard'

export class HouseDisplay extends Component {

  async componentDidMount() {
   
    const houses = await getHouses();
    await this.props.loadHouses(houses);

  }

  render() {
    return (
      <div className="Display-info">
       <img src="../../wolf.gif" id="wolf"/>
      </div>
    );
  }
}

// save for display


        // { (this.props.houses.length === 0) &&
        //   <img src='../../../public/wolf.gif' id='wolf'/>
        // }

        // { (this.props.houses.length > 0) &&
        //   <HouseCard />
        // }
      

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

