import React from 'react'
import {InfoWindow, Marker} from "react-google-maps";

export class MapMarker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoBoxIsOpen: false
        };
    }

    render() {
        return (
            <Marker
                key={this.props.listing.id}
                position={{
                    lat: parseFloat(this.props.listing.location.latitude),
                    lng: parseFloat(this.props.listing.location.longitude)
                }}
                onClick={() =>
                    this.setState({
                        infoBoxIsOpen: true
                    })}
            >
                {console.log(this.state.infoBoxIsOpen)}
                {this.state.infoBoxIsOpen &&
                <InfoWindow
                    onCloseClick={() =>
                        this.setState({
                            infoBoxIsOpen: false
                        })}
                    options={{closeBoxURL: ``, enableEventPropagation: true}}
                >

                    <div>
                        <div>
                            {this.props.listing.location.name}
                        </div>
                        <div>
                            {this.props.listing.space_type}
                        </div>
                        <div>
                            {this.props.listing.location.address}
                        </div>
                    </div>
                </InfoWindow>
                }
            </Marker>
        )
    }
}

export default MapMarker;
