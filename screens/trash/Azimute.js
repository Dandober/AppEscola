import React from 'react'
import {View, StyleSheet} from 'react-native'
import firebase from '../auth/Firebase'
import * as Location from 'expo-location'
import {MapView} from 'expo';


const GEOLOCATION_OPTIONS = {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000};
export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            location: {
                coords: {latitude: 0, longitude: 0}
            },
            //arrayKago: [{key:1,coordinates:{latitude: -22.87886388, longitude:-43.42171311},title:'ola',description:'olaaaaaaaaaa'}]

            //array vindo do firebase
            lista: []
        }

        //função de conexão com o fire base para obter valore
        firebase.database().ref('Users').once('value', (snapshot) => {
            let state = this.state;
            state.lista = [];
            //lopp inserido'push' em cada componente do Map .Marker
            snapshot.forEach((childItem) => {
                state.lista.push({
                    key: childItem.key,
                    coordinates: childItem.val().coordinates,
                    title: childItem.val().title,
                    description: childItem.val().description
                });
            });

            this.setState(state);

        })

    }

    componentWillMount() {
        Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged)

    }

    locationChanged = (location) => {
        region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.05,
        },
            this.setState({location, region})
    }


    render() {
        return (
            <View style={styles.container}>


                <MapView style={{flex: 1}}
                         minZoomLevel={16}
                         showsUserLocation={true}
                         region={this.state.region}
                >

                    {this.state.lista.map(marker => (

                        <MapView.Marker
                            coordinate={marker.coordinates}
                            title={marker.title}
                            description={marker.description}>

                        </MapView.Marker>

                    ))}

                </MapView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})