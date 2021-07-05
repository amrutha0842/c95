import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView
} from "react-native";
import firebase from 'firebase';
import db from '../config';
import { Header } from "react-native-elements";
import { RFValue } from 'react-native-responsive-fontsize';


export default class StartEarTestScreen extends Component {
    constructor() {
        super();
        
    }

    render() {
        return (
            <View>
                <Header
                    placement="left"
                    centerComponent={{ text: "Hi.. Let's Start Your Ear Test", style: { color: '#fff', fontWeight: "bold", fontSize: "48", fontStyle: "italic"} }}
                />
        <TouchableOpacity 
         style={styles.button}
        onPress = {() => {
            Alert.alert("CAUTION: Pls wear your headphone/ Earphone in order to start your test");
        }}> 
            <Text> START MY EAR TEST </Text>
            
        </TouchableOpacity>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#6fc0b8"
    },
    button: {
        width: "80%",
        height: RFValue(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        backgroundColor: "#ffff",
        shadowColor: "#000",
        marginBottom: RFValue(10),
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.3,
      shadowRadius: 10.32,
      elevation: 16
    }
});