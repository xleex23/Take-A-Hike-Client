import usePlacesAutoComplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

export default function Search() {
  const {ready, value, suggestions: {status, data}, setValue, clearSuggestion } = usePlacesAutoComplete({
    requestOptions: {
      location: { lat: () => 34.0597, lng: () => -118.3009 },
      radius: 200*1000,
    }
  })
}