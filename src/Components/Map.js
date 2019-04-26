import React from 'react'
import {compose, withProps} from "recompose"
import {
    GoogleMap,
    Marker,
    withGoogleMap,
    withScriptjs,
    InfoWindow,
    StandaloneSearchBox,
} from 'react-google-maps'
import MapMarker from "./MapMarker";
import * as API from '../apiActions'
import SearchBox from "react-google-maps/lib/components/places/SearchBox";

export class Map extends React.Component {
    constructor(props) {
        super(props);
        this.myRefs = {};
        this.state = {
            places: [],
            center: {lat: 35.949872, lng: -78.8977132},
            bounds: null
        }
    }

    componentDidMount() {
        this.postLatLng({lat: () => this.state.center.lat, lng: () => this.state.center.lng})
    }

    postLatLng({lat, lng}) {
        API.Locations.create({latitude: lat(), longitude: lng()}, response => {
            console.log(response)
            this.props.onPlaceSearched(response.google_place_id)
        })
    }

    render() {
        return (
            this.props.data &&
            <GoogleMap
                defaultZoom={12}
                center={this.state.center}
                onIdle={() => {
                    this.setState({
                        bounds: this.myRefs.map.getBounds(),
                        center: this.myRefs.map.getCenter(),
                    })
                    this.postLatLng(this.myRefs.map.getCenter())
                }}
                ref={ref => this.myRefs.map = ref}
            >
                <SearchBox
                    controlPosition={1}
                    ref={ref => this.myRefs.searchBox = ref}
                    bounds={this.state.bounds}
                    onPlacesChanged={() => {
                        const places = this.myRefs.searchBox.getPlaces();
                        if (places.length === 1) {
                            console.log(places[0])
                            this.setState({
                                places: places,
                                center: places[0].geometry.location
                            })
                        }
                    }}
                >
                    <input
                        type="text"
                        placeholder="Customized your placeholder"
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                        }}
                    />
                </SearchBox>
                {this.props.data.map(listing => <MapMarker key={listing.id} listing={listing}/>)}
            </GoogleMap>
        )
    }
}

export default compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDbGXFv-QOejj2G8vfGj5cIuYqXjI1AhRU&libraries=places",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `60vh`}}/>,
        mapElement: <div style={{height: `100%`}}/>,
    }),
    withScriptjs,
    withGoogleMap
)((Map))
