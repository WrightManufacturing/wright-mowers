import React from 'react'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import styled from 'styled-components'
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {geolocated} from 'react-geolocated';
import scag_locations from '../data/scag_locations'

const Dealer = styled(Marker)`
  color: ${props => props.theme.colors.highlight};
  font-weight: bold;
  
`
const SmallPin = styled.div`
  height: 10px;
  width: 10px;
  background-color: ${props => props.theme.colors.highlight};
  border-radius: 50%;
`
const Pin = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50% 50% 50% 0;
  background: ${props => props.theme.colors.highlight};
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -20px 0 0 -20px;
  &:after {
    content '';
    width: 10px;
    height: 10px;
    margin: 5px 0 0 5px;
    background: ${props => props.theme.colors.base};
    position: absolute;
    border-radius: 50%;
  }
`
class DealerLocator extends React.Component {
  state = {
    viewport: {
      zoom: 8,
      height: 400,
      width: 800
    },
    markers: scag_locations
  }

  render () {
    return(
      <div>
        <SEO />
        <Container>
          <PageTitle>Find Dealer</PageTitle>            
        {
          !this.props.isGeolocationAvailable
          ? <div>Your browser does not support Geolocation</div>
          : !this.props.isGeolocationEnabled
            ? <div>Geolocation is not enabled</div>
            : this.props.coords
              ? 
              <ReactMapGL
                mapboxApiAccessToken={'pk.eyJ1IjoiamVzc2V3cmlnaHQiLCJhIjoiY2pqMDdja3NuMGV2YTNvcGI5ZWx6MDBoZiJ9.6Rp8KPlFDyhX9_WJIyze1w'}
                latitude={this.props.coords.latitude}
                longitude={this.props.coords.longitude}
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
              >

                <Dealer
                  latitude={this.props.coords.latitude}
                  longitude={this.props.coords.longitude}
                  >
                  <Pin></Pin>
                </Dealer>

              {this.state.markers.map(({latitude, longitude, name}) => 
                <Dealer latitude={latitude} longitude={longitude} >
                  <SmallPin></SmallPin>
                </Dealer>
              )}

            </ReactMapGL>
              : <div>Getting the location data...</div>
        }

        </Container>

      </div>
    )
  }
}


export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(DealerLocator);