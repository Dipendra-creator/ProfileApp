import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Register from "./Components/Register";
import Constants from 'expo-constants';
import ProfileCard from "./Components/ProfileCard";
import {Button, Card} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import db from './config';

let setRoute;


export default function App() {
    let [ROUTE, SETROUTE] = useState(<Register />);
    setRoute = SETROUTE;



    return (
        <LinearGradient colors={['#F7FD04', '#6A82FB']} style={styles.container}>
            {ROUTE}
            <View style={{flexDirection: 'row-reverse',}}>
                <Button
                    onPress={() => {
                        {SETROUTE(<ProfileCard />)}
                    }}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Profile</Text>
                </Button>
                <Button
                    onPress={() => {
                        {SETROUTE(<Register />)}
                    }}
                    style={[styles.button, {marginRight: 10}]}>
                    <Text style={styles.buttonText}>Register</Text>
                </Button>
            </View>
        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
    button: {
        marginTop: 20,
        backgroundColor: '#FC5404',
        height: 40,
        width: "48%",
        borderRadius: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});
