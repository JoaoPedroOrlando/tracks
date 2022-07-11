import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = ()=> {
    let points =[];
    for(let i=0;i< 20;i++){
        if(i % 2 === 0){

            points.push({ 
                latitude: -24.96968 + i * 0.0002,
                longitude: -53.46786 + i * 0.0003,
            });
        } else{
            points.push({ 
                latitude: -24.96968 - i * 0.0005,
                longitude: -53.46786 + i * 0.0006,
            });
        }
    }

    return(
        <MapView 
            style ={styles.map}
            initialRegion={{
                latitude: -24.96968,
                longitude: -53.46786,
                latitudeDelta: 0.01,
                longitudeDelta:0.01,
            }}
        >
            <Polyline coordinates={points}/>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map:{
        height:300
    }
});

export default Map;