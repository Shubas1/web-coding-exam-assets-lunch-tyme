import React from 'react';
import fontStyles from '../../styles/fontStyles';
import styles from './styles';

const RestaurantCard = ({restaurant}) => {
  let {name, category, location, contact} = restaurant;

  if(location == null) {
    location = {};
  }
  if(contact == null) {
    contact = {};
  }

  let {twitter, formattedPhone}  = contact;

  if(twitter != undefined) {
    twitter = "@" + twitter;
  } else {
    twitter = "";
  }

  return (
    <div style={styles.cardRoot}>
      <div style={styles.header}>
        <div style={styles.headerContainer}>
          <h1 style={{...fontStyles.cardHeaderWhite, width: '100%'}}>{name}</h1>
          <h1 style={{...fontStyles.cardSubHeaderWhite, width: '100%'}}>{category}</h1>
        </div>
      </div>
      <div style={styles.content}>
        <div style={styles.cardInfoHeader}>
          <label style={{...fontStyles.cardInfoDark, width: '100%'}}>{location.address}</label>
          <label style={{...fontStyles.cardInfoDark, width: '100%'}}>{location.crossStreet}</label>
        </div>
       <label style={{...fontStyles.cardInfoDark, ...styles.cardInfoContent, width: '100%'}}>{formattedPhone}</label>
       <label style={{...fontStyles.cardInfoDark, ...styles.cardInfoContent, width: '100%'}}>{twitter}</label>
      </div>
    </div>
  );
}

export default RestaurantCard;
