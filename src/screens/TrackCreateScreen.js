import '../_mockLocation';
import React,{useEffect,useState} from "react";
import {StyleSheet} from 'react-native';
import { SafeAreaView } from "react-navigation";
import {Text} from 'react-native-elements'
import { requestForegroundPermissionsAsync, watchPositionAsync,Accuracy } from 'expo-location';
import Map from "../components/Map";

const TrackCreateScreen =()=>{
    const [err,setErr]=useState(null);

    const startWatching = async ()=>{
        try{
            const { granted } = await requestForegroundPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval:1000,
                distanceInterval: 10
            }, (location)=>{
                // console.log(location);
            });
        }catch(e){
            setErr(e);
        }
    }

    useEffect(()=>{
        startWatching();
    },[]);

    return(
    <SafeAreaView forceInset={{top:'always'}}>
        <Text h2>Create a Track</Text>
        <Map/>
        {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default TrackCreateScreen;