import React, { useState} from "react"
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import MapView, { Marker, Polyline } from 'react-native-maps'

const Map = ({navigation}) => {

    const [mitad, setMitad] = useState({
        latitude: -32.481794618791085,
        longitude: -58.23284374210875,
    });

    const [origen, setOrigen] = useState({
        latitude: -32.48474,
        longitude: -58.23232,
    });
    
    const [destino, setDestino] = useState({
        latitude: -32.47903,
        longitude: -58.23342,
    });

    return (
        <View style={styles.container}>
            <MapView style={styles.map} 
                initialRegion={{
                    latitude: mitad.latitude,
                    longitude: mitad.longitude,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008
                }}
            >
                <Marker coordinate={origen}/>
                <Marker coordinate={destino}/>
                <Polyline 
                    coordinates={[origen, destino]}
                    strokeColor= 'grey' 
                    strokeWidth={4}                   
                />
            </MapView>
            <View style={styles.direcc}>
                <Text>25 de Mayo 385, Concepcion del Uruguay, Entre Rios, Argentina.</Text>
                <Text>dsa</Text>
                <Text>Gral. Galarza 734,Concepcion del Uruguay, Entre Rios, Argentina.</Text>
            </View>
            <TouchableOpacity style={styles.inicioButton} onPress={() => navigation.navigate('Conferences')}>
                <Text style= {{fontSize: '22', fontWeight: 'bold', color: 'white'}}>Regresar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.inicioButton2, {backgroundColor: '#FF7600'}]} >
                <Text style= {{fontSize: '22', fontWeight: 'bold', color: 'white'}}>Ir a la ConfBeer</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
        paddingVertical: 0,
        borderRadius: 5
    },
    map: {
        width: '100%',
        height:'50%', 
    },
    inicioButton: {
        backgroundColor: '#FF7600',
        width: 180,
        height: 60,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%'
    },
    inicioButton2: {
        width: 280,
        height: 60,
        borderRadius: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25
    },
    direcc: {
        width: '80%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'grey',
        marginTop: '4%'
    },
});

export default Map;

//<Image style={{ width: '100%', height: '50%'}} source={require("../assets/images/pinta1.jpg")} />