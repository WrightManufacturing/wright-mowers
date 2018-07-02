import React from 'react'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


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
          
          <ReactMapGL
            mapboxApiAccessToken={'pk.eyJ1IjoiamVzc2V3cmlnaHQiLCJhIjoiY2pqMDdja3NuMGV2YTNvcGI5ZWx6MDBoZiJ9.6Rp8KPlFDyhX9_WJIyze1w'}
            width={400}
            height={400}
            latitude={37.7577}
            longitude={-122.4376}
            zoom={8}
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
          >

          </ReactMapGL>

        </Container>
      </div>
    )
  }
}


export default DealerLocator

