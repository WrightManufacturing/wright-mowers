import React from 'react'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'
import styled from 'styled-components'
import ReactMapGL, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { geolocated } from 'react-geolocated'
import scag_locations from '../data/scag_locations'
import Loading from '../components/Loading'
import Layout from '../components/Layout'

const DealerPoint = styled(Marker)`
  color: ${props => props.theme.colors.highlight};
  font-weight: bold;
`

const SearchInputs = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${props => props.theme.responsive.medium}) {
    flex-direction: column;
  }
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  button {
    border: none;
    padding: 0.5rem 1rem;
    font-weight: 700;
    transition: background-color 0.06s;
    background-color: ${props => props.theme.colors.secondary};
    &:first-child {
      border-radius: 3px;
    }
    &:hover {
      background-color: ${props => props.theme.colors.highlight};
    }
  }
  div {
    margin: 1rem;
    font-weight: 700;
  }
  input[type='text'] {
    box-sizing: border-box;
    outline: none;
    padding: 0.5rem 1rem;
    border: none;
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 3px 0px 0px 3px;

    &:focus {
      background-color: ${props => props.theme.colors.secondary};
    }
  }
  form {
    button {
      border-radius: 0px 3px 3px 0px;
    }
  }
`

const Map = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${props => props.theme.responsive.medium}) {
    flex-direction: column;
    width: 400px;
    margin: auto;
  }
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const Dealers = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  border: 1px solid ${props => props.theme.colors.tertiary};
  li {
    margin: 0rem 1rem;
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
    padding: 1rem;
    &:hover {
      background-color: ${props => props.theme.colors.tertiary};
    }
    &:last-child {
      border: none;
    }
    p {
      font-weight: 300;
    }
  }
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
`
class DealerLocator extends React.Component {
  state = {
    viewport: {
      zoom: 8,
      height: 400,
      width: 400
    },
    markers: scag_locations
  }

  render() {
    return (
      <Layout>
        <SEO />
        <Container>
          <PageTitle>Find Dealer</PageTitle>
          <SearchInputs>
            <button>Use My Location</button>
            <div>OR</div>

            <form action="">
              <input type="text" placeholder="Enter City, State, or Zip" />
              <button type="submit">Search</button>
            </form>
          </SearchInputs>
          {!this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
          ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
          ) : this.props.coords ? (
            <Map>
              <ReactMapGL
                mapboxApiAccessToken={
                  'pk.eyJ1IjoiamVzc2V3cmlnaHQiLCJhIjoiY2pqMDdja3NuMGV2YTNvcGI5ZWx6MDBoZiJ9.6Rp8KPlFDyhX9_WJIyze1w'
                }
                latitude={this.props.coords.latitude}
                longitude={this.props.coords.longitude}
                {...this.state.viewport}
                onViewportChange={viewport => this.setState({ viewport })}
              >
                <DealerPoint
                  latitude={this.props.coords.latitude}
                  longitude={this.props.coords.longitude}
                >
                  <Pin />
                </DealerPoint>

                {this.state.markers.map(({ latitude, longitude, name }) => (
                  <DealerPoint
                    key={name + latitude}
                    latitude={latitude}
                    longitude={longitude}
                  >
                    <SmallPin />
                  </DealerPoint>
                ))}
              </ReactMapGL>

              <Dealers>
                {this.state.markers.map(
                  ({ latitude, longitude, name }, idx) =>
                    idx < 6 && (
                      <li key={longitude}>
                        {name}{' '}
                        <p>
                          {latitude}, {longitude}
                        </p>
                      </li>
                    )
                )}
              </Dealers>
            </Map>
          ) : (
            <Loading />
          )}
        </Container>
      </Layout>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(DealerLocator)
