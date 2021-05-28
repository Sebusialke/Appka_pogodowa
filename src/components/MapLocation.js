import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '400px',
    height: '400px',
    position: 'absolute',
    left: '55px'
}

class MapLocation extends React.Component{
    render(){
        return(
            <div className="main-map-div">
                <Map
                    google={this.props.google}
                    style={style}
                    initialCenter={{
                        lat: this.props.location.lat,
                        lng: this.props.location.long
                    }} 
                    center={{
                        lat: this.props.location.lat,
                        lng: this.props.location.long
                    }}
                    zoom={15}
                >
                <Marker     
                    title = {'Your Location'}
                    name = {'Your Location'}
                    position = {{lat: this.props.location.lat, lng: this.props.location.long}}/>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBbVY_-Dw3pXwnSfsGCyJ80R3nXV2vE0Qs'
})
(MapLocation)