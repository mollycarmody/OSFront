import React from 'react'
import {compose, withProps} from "recompose"
import {GoogleMap, Marker, withGoogleMap, withScriptjs, InfoWindow} from 'react-google-maps'
import MapMarker from "./MapMarker";
import Autocomplete from 'react-google-autocomplete';

export class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            this.props.data &&
            <GoogleMap
                defaultZoom={12}
                defaultCenter={{lat: 36.0014, lng: -78.9382}}

            >
                {this.props.data.map(listing => <MapMarker key={listing.id} listing={listing}/>)}
            </GoogleMap>
        )
    }
}

export default compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDbGXFv-QOejj2G8vfGj5cIuYqXjI1AhRU&",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `60vh`}}/>,
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withScriptjs,
    withGoogleMap
)((Map))
