import React, { useState } from 'react'
import styled from 'styled-components'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

const Title = styled.div`
  color: ${props => props.theme.color.dark};
  background-color: ${props => props.theme.color.primary};
  border-bottom-right-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  width: fit-content;
  padding: 10px 30px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
`

const Tooltip = styled.div`
  color: black;
  font-size: 18px;
  padding: 0 10px;
`

const MapComponent = ({ google, markers }) => {
  const [activeMarker, setActiveMarker] = useState(null)
  const [selectedPlace, setSelectedPlace] = useState({})
  const [showingInfoWindow, setShowingInfoWindow] = useState(false)

  const initialCenter = { lat: 13.762755, lng: 100.52694 }
  const zoom = 13

  const onMarkerClick = (props, marker) => {
    setActiveMarker(marker)
    setSelectedPlace(props)
    setShowingInfoWindow(true)
  }

  const onInfoWindowClose = () => {
    setActiveMarker(null)
    setShowingInfoWindow(false)
  }

  const onMapClicked = () => {
    if (showingInfoWindow) {
      onInfoWindowClose()
    }
  }

  return (
    <>
      <Title>Restaurants</Title>
      <Map
        google={google}
        onClick={onMapClicked}
        initialCenter={initialCenter}
        zoom={zoom}
      >
        {markers.map(marker => (
          <Marker
            name={marker.name}
            onClick={onMarkerClick}
            position={{ lat: marker.latitude, lng: marker.longitude }}
          />
        ))}
        <InfoWindow
          marker={activeMarker}
          onClose={onInfoWindowClose}
          visible={showingInfoWindow}
        >
          <Tooltip>{selectedPlace.name}</Tooltip>
        </InfoWindow>
      </Map>
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
})(MapComponent)
