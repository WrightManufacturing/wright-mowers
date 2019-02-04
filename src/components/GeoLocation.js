import React from 'react'
import { geolocated } from 'react-geolocated'

class GeoLocation extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div>
        {this.props.coords.longitude}, {this.props.coords.latitude}
      </div>
    ) : (
      <div>Getting the location data...</div>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(GeoLocation)
