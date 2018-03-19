import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RestaurantListItem, RestaurantDetails, Navigator } from './components';
import { fetchRestaurantsData, newRestaurantSelected } from './redux/actions';

class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { showMenu: true };
  }
  componentDidMount() {
    this.props.getRestaurants();
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.selectedIndex != undefined && this.props.selectedIndex != nextProps.selectedIndex) {
      this.setState({ showMenu: false });
    }
  }
  render() {
    return (
      <div>
          <Navigator showMenu={this.state.showMenu} appName="Lunch Tyme" contentPane={<RestaurantDetails />}>
          {
            this.props.restaurants.map((item, index) =>
              <RestaurantListItem
                key={item.name}
                index={index}
                name={item.name}
                category={item.category}
                url={item.backgroundImageURL} />)
          }
        </Navigator>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurantsDataReducer.restaurants,
    selectedIndex: state.restaurantsDataReducer.selectedIndex
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getRestaurants: () => dispatch(fetchRestaurantsData()),
      newRestaurantSelected: index => dispatch(newRestaurantSelected(index))
    }
}

const Home = connect(mapStateToProps,mapDispatchToProps)(HomeComponent);

export default Home;
