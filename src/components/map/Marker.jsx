import React from 'react';
import styles from './styles';

const Marker = (props) =>
{
  return (
    <div>
      <div style={styles.markerOuter}>
        <div style={styles.markerMiddle}>
          <div style={styles.markerInner} />
        </div>
      </div>
    </div>);
};

export default Marker;
