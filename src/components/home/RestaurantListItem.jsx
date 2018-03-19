import React, { Component } from 'react';
import { connect } from 'react-redux';
import fontStyles from '../../styles/fontStyles';
import styles from './styles';
import { newRestaurantSelected } from '../../redux/actions';

class RestaurantListItemComponent extends Component {
  constructor(props) {
    super(props);
  }
  listItemClicked(index) {
    if(this.props.selectedIndex != index) {
      console.log(this.props.selectedIndex);
      console.log(index);
      this.props.newRestaurantSelected(index);
    }
  }
  render() {
    return (
      <div onClick={() => this.listItemClicked(this.props.index)} style={{...styles.cardRoot, position: 'relative', background:`url(${this.props.url})`}}>
        <div style={styles.listItemRoot}>
          <div style={{...styles.headerContainer}}>
            <h1 style={{...fontStyles.cardHeaderWhite, width: '100%'}}>{this.props.name}</h1>
            <h1 style={{...fontStyles.cardSubHeaderWhite, width: '100%'}}>{this.props.category}</h1>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    selectedIndex: state.restaurantsDataReducer.selectedIndex
  }
}

const mapDispatchToProps = dispatch => {
  return {
      newRestaurantSelected: index => dispatch(newRestaurantSelected(index))
    }
}

const RestaurantListItem = connect(mapStateToProps, mapDispatchToProps)(RestaurantListItemComponent);

export default RestaurantListItem;
