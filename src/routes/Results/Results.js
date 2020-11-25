import React, { Component } from 'react';
import {useLocation, useHistory} from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Search from '../../components/Search/Search';
// import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import {google} from 'google-maps';
// import usePlacesAutoComplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
// import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import '@reach/combobox/styles.css';
import mapStyles from './mapStyles';
import './Results.css';
import GoogleMapReact from 'google-map-react';


//AIzaSyDOx41MYtV2pGAbr5ucTQS1--b7xb5AzNQ
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 

export default function Results() {

  const location = useLocation();
  const searchTerm = location.query;
//   let map_sect;

//   const initialize = () => {
//     const center = new window.google.maps.LatLng(searchTerm.lat, searchTerm.lng)
//     let map_sect = new window.google.maps.Map
//     (document.getElementById("map_area"), {
//       center: center,
//       zoom: 13
//     })
//     const request = {
//       query: "hiking trail",
//       types: ['trail']
//     }
//     let service = new window.google.maps.places.PlacesService(map_sect)
//     service.nearbySearch(request, callback)
//   }

//   window.google.maps.event.addDomListener(window, 'load', initialize())
  
//   const libraries = ["places"];

  // const mapContainerStyle = {
  //   width: '100vw',
  //   height: '91vh'
  // };

  const mapCenter = {
    lat: searchTerm.lat,
    lng: searchTerm.lng
  };

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
  };

//   // const request = {
//   //   query: "hiking trail",
//   //   types: ['trail']
//   // }

//   // let service = new window.google.maps.places.PlacesService(map)
//   // service.nearbySearch(request, callback())

//   const callback = (results, status) => {
//     if(status == google.maps.places.PlacesServiceStatus.OK) {
//       for (let i=0; i<results.length; i++) {
//         createMarker(results[i])
//       }
//     }
//   }

//   const createMarker = (place) => {
//     let placeLoc = place.geometry.location;
//     let marker = new window.google.maps.Marker({
//       map: map_sect,
//       position: place.geometry.location
//     })
//   }

//   const {isLoaded, loadError} = useLoadScript({
//     googleMapsApiKey: "AIzaSyDOx41MYtV2pGAbr5ucTQS1--b7xb5AzNQ",
//     // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     libraries,
//   });

//   if(loadError) return "Error loading maps";
//   if(!isLoaded) return "Loading Map";

//   const newSearch = () => {
//     history.push({ pathname: '/' })
//   };


  return (
  // <div>
  //   <button className="new-search-btn" onClick={newSearch}>New Search</button>
  //   {/* <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={mapCenter} options={options}></GoogleMap> */}
  //   <div id="map_area"></div>
  // </div>

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDOx41MYtV2pGAbr5ucTQS1--b7xb5AzNQ" }}
          defaultCenter={mapCenter}
          defaultZoom={12}
          options={options}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={searchTerm.lat}
            lng={searchTerm.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    
  );
};