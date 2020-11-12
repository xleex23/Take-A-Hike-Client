import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from '../../components/Search/Search';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import usePlacesAutoComplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import '@reach/combobox/styles.css';
import mapStyles from './mapStyles';

//AIzaSyDOx41MYtV2pGAbr5ucTQS1--b7xb5AzNQ

export default function Results() {

  // console.log(this.props)

  // useEffect(()=> {
  //   console.log(this.props.history.location)

  // },[]

  const libraries = ["places"];

  const mapContainerStyle = {
    width: '100vw',
    height: '91vh'
  }

  const center = {
    lat: 34.0597,
    lng: -118.3009
  }

  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
  }

  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: "AIzaSyDOx41MYtV2pGAbr5ucTQS1--b7xb5AzNQ",
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading Map";


  return (
  <div>
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} options={options}></GoogleMap>
  </div>
  )
};