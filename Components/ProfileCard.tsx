import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { DataTable } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from "react";
import db from '../config';

export default function ProfileCard() {

    const [dataArray, setDataArray] = useState({})

    // for Local Storage

    // const GetData = () => {
    //     try {
    //         AsyncStorage.getItem('userInfoName').then(
    //             value => {
    //                 if (value != null) {
    //                     setName(value)
    //                 }
    //             }
    //         )
    //         AsyncStorage.getItem('userInfoEmail').then(
    //             value => {
    //                 if (value != null) {
    //                     setEmail(value)
    //                 }
    //             }
    //         )
    //         AsyncStorage.getItem('userInfoCity').then(
    //             value => {
    //                 if (value != null) {
    //                     setAddress(value)
    //                 }
    //             }
    //         )
    //         AsyncStorage.getItem('userInfoMobile').then(
    //             value => {
    //                 if (value != null) {
    //                     setNumber(value)
    //                 }
    //             }
    //         )
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    //
    // GetData()

    useEffect(() => {
        db.ref('data').on('value', (snap) => {
            const todos = snap.val();
            const taskList = [];
            const finalarray = [];
            for (let id in todos) {
                taskList.push({ id, ...todos[id] });
            }
            for (let id in taskList[taskList.length-1]) {
                finalarray.push(taskList[taskList.length-1][id]);
            }
            setDataArray(finalarray)
        })
    }, [])



    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                ID Card
            </Text>
            <Image style={styles.logo} source={require('../assets/66115431.jpg')} />
            <Text style={styles.high}>
                Full Stack Developer
            </Text>
            <DataTable style={{borderWidth: 2, borderLeftWidth: 0, borderRightWidth: 0, borderColor:"#FC5C7D"}}>
                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1}}><Text style={styles.paragraph}>Name:</Text></DataTable.Cell>
                    {/*// @ts-ignore*/}
                    <DataTable.Cell style={{flex: 2.5}}>{dataArray[0]}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1}}><Text style={styles.paragraph}>Email:</Text></DataTable.Cell>
                    {/*// @ts-ignore*/}
                    <DataTable.Cell style={{flex: 2.5}}>{dataArray[1]}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1}}><Text style={styles.paragraph}>City:</Text></DataTable.Cell>
                    {/*// @ts-ignore*/}
                    <DataTable.Cell style={{flex: 2.5}}>{dataArray[2]}</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell style={{flex: 1}}><Text style={styles.paragraph}>Mobile:</Text></DataTable.Cell>
                    {/*// @ts-ignore*/}
                    <DataTable.Cell style={{flex: 2.5}}>{dataArray[3]}</DataTable.Cell>
                </DataTable.Row>

            </DataTable>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        padding: 24,
    },
    paragraph: {
        marginBottom: 24,
        marginTop: 0,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        height: 150,
        width: 150,
        borderRadius: 75,
        marginBottom: 20
    },
    high: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FF8300',
        marginBottom: 20,
    }
});
