import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { string } from 'prop-types';

export class HouseCard extends Component {

  render() {
    const renderedHouses = this.props.houses.map( house => {
      return (
        <div className='Card'>
          <h1>{house.house}</h1>
          <h3>Founded: {house.founded}</h3>
          <p>Seats: {house.seats}</p>
          <p>Titles: {house.titles}</p>
          <p>Coat Of Arms: {house.coatOfArms}</p>
          <p>Ancestral Weapons: {house.ancestralWeapons}</p>
          <p>Words: {house.words}</p>
        </div>
      )
    })

    return (
      <div className='Container'>
        { renderedHouses }
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  houses: store.houses
})

export default connect(mapStateToProps, null)(HouseCard)

