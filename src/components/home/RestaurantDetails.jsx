import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { RestaurantCard } from '../home';
import Map from '../map';

const BLANK_DATA = {
	    "name": "",
	    "backgroundImageURL": "",
	    "category" : "",
            "contact": {
                "phone": "",
                "formattedPhone": "",
                "twitter": ""
            },
            "location": {
                "address": "",
                "crossStreet": "",
                "lat": -180,
                "lng": -180,
                "postalCode": "",
                "cc": "",
                "city": "",
                "state": "",
                "country": "",
                "formattedAddress": [
                    "",
                    "",
                    ""
                ]
            }
};

class RestaurantDetailsComponent extends Component {
  render() {
    let restaurant = this.props.restaurants[this.props.selectedIndex] || BLANK_DATA;
    return (
				<PerfectScrollbar>
				  <div style={{paddingBottom: '100px'}}>
				     <div style={{height:'50vh', background:'#FFFFFF'}}>
				      <Map location={restaurant.location}/>
				     </div>
				     <div style={{height:'100%', background: '#FFFFFF'}}>
				      <RestaurantCard restaurant={restaurant} />
				     </div>
				  </div>
				</PerfectScrollbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurantsDataReducer.restaurants,
    selectedIndex: state.restaurantsDataReducer.selectedIndex
  }
}

const RestaurantDetails = connect(mapStateToProps)(RestaurantDetailsComponent);

export default RestaurantDetails;
