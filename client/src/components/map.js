import React, { useState } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

const MapComponent = ({ google }) => {
  const [activeMarker, setActiveMarker] = useState(null)
  const [selectedPlace, setSelectedPlace] = useState({})
  const [showingInfoWindow, setShowingInfoWindow] = useState(false)

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
    <Map google={google} onClick={onMapClicked}>
      <Marker
        name='SOMA'
        onClick={onMarkerClick}
        position={{ lat: 37.778519, lng: -122.40564 }}
      />
      <Marker
        name='Dolores park'
        onClick={onMarkerClick}
        position={{ lat: 37.759703, lng: -122.428093 }}
      />
      <InfoWindow
        marker={activeMarker}
        onClose={onInfoWindowClose}
        visible={showingInfoWindow}
      >
        <div>
          <h1>{selectedPlace.name}</h1>
        </div>
      </InfoWindow>
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
})(MapComponent)
