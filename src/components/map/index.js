import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import styles from './styles';
import fontStyles from '../../styles/fontStyles';

export default class Map extends Component {
  static defaultProps = {
    zoom: 10,
    center: {lat:-60,lng:-40}
  }
constructor(props) {
    super(props);
    this.state = {
      center: { lat: -60, lng: -40}
    }
}
componentWillReceiveProps(nextProps) {
  const {lat, lng} = nextProps.location;
  this.setState({
    center : {lat,lng}
  });
}
render() {
    return (
      <div className='google-map' style={{width: '100%', height: '100%'}}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={this.state.center}
          zoom={this.props.zoom}
          >
          <Marker
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            />
        </GoogleMapReact>
      </div>
    )
  }
}
