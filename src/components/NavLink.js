import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
// child has access to the navigation prop
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';

const NavLink = ({navigation, text, routeName})=>{
    return(
        <View>
            <TouchableOpacity
                onPress={()=>{navigation.navigate(routeName)}}
            >
            <Spacer>
                <Text style={styles.link}>
                    {text}
                </Text>
            </Spacer>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    link:{
        color:'blue',
        fontSize:16,
        fontWeight:'700',
    }
});

export default withNavigation(NavLink);