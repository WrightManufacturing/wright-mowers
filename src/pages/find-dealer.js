import React from 'react'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import styled from 'styled-components'

import GeoLocation from '../components/GeoLocation'
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapContainer = styled.div`
  margin: auto;
  padding: auto;
`


class DealerLocator extends React.Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };
  render () {
    return(
      <div>
        <SEO />
        <Container>
          <PageTitle>Dealer Locator</PageTitle>
          
          <MapContainer>
            <ReactMapGL
              mapboxApiAccessToken={'pk.eyJ1IjoiamVzc2V3cmlnaHQiLCJhIjoiY2pqMDdja3NuMGV2YTNvcGI5ZWx6MDBoZiJ9.6Rp8KPlFDyhX9_WJIyze1w'}
              latitude={37.78}
              longitude={-122.41}
              width={400}
              height={400}
              zoom={7}
              {...this.state.viewport}
              onViewportChange={(viewport) => this.setState({viewport})}
            >
            <Marker latitude={37.78} longitude={-122.41} offsetLeft={-20} offsetTop={-10}>
              <div style={{color: '#fdbb2d', fontWeight: 'bold' }}>DEALER</div>
            </Marker>
            <Marker latitude={37.50} longitude={-122.30} offsetLeft={-20} offsetTop={-10}>
              <div style={{color: '#fdbb2d', fontWeight: 'bold' }}>DEALER</div>
            </Marker>
            </ReactMapGL>
          </MapContainer>

          <GeoLocation />


        </Container>
      </div>
    )
  }
}


export default DealerLocator

