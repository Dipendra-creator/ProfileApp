import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Button, DataTable, TextInput} from 'react-native-paper';
import Field from './Field'
import Constants from "expo-constants";
import ProfileCard from "./ProfileCard";
import AsyncStorage from '@react-native-async-storage/async-storage';
import db from '../config';

interface Props {
    // TODO: Add type
    navigation?: any
}

export default function Register({navigation}: Props) {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

    async function StoreData(key: string, data: any) {
        if (data.length === 0) {
            Alert.alert('Warning', 'Empty')
        } else {
            try {
                await AsyncStorage.setItem(key, data)
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Register</Text>

            <DataTable style={{borderRadius: 10 ,borderColor: "#FC5C7D"}}>
                <Field text="Name" value={name} onChangeText={(value) => setName(value)}/>
                <Field text="Address" value={address} onChangeText={(value) => setAddress(value)}/>
                <Field text="Number" value={number} onChangeText={(value) => setNumber(value)}/>
                <Field text="E-Mail" value={email} onChangeText={(value) => setEmail(value)}/>
            </DataTable>
            <Button
                onPress={() => {
                    StoreData('userInfoName', name);
                    StoreData('userInfoEmail', email);
                    StoreData('userInfoCity', address);
                    StoreData('userInfoMobile', number);
                    db.ref('data').push([name, address, number, email])
                    setName('')
                    setAddress('')
                    setNumber('')
                    setEmail('')
                }}
                style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
            </Button>
        </View>
    )
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
        width: 100,
        borderRadius: 20,
        marginLeft: "35%"
    },
    row: {
        margin: 5,
        padding: 5,
    },
    heading: {
        fontSize: 28,
        marginBottom: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    paragraph: {
        marginBottom: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        margin: 5,
        padding: 10,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})
