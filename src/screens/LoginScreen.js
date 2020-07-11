import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';
import { colors } from '../assets/constants/colors';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <>
                <View style={styles.container}>
                    <Image source={require("../assets/images/icons/login.png")} style={styles.tinyLogo}></Image>
                    <Text style={styles.textLabels}>Username</Text>
                    <TextInput style={styles.textInputs}></TextInput>
                    <Text style={styles.textLabels}>Password</Text>
                    <TextInput style={styles.textInputs}></TextInput>
                    <Button title="Login" style={styles.loginButton}
                        onPress={() => this.props.navigation.navigate("BuildingListScreen")}></Button>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors[2].colorId
    },
    textLabels: {
        textAlign: "right",
        color: colors[4].colorId,
        fontSize: 18
    },
    textInputs: {
        backgroundColor: colors[4].colorId,
        width: "75%",
        height: "5%",
        marginBottom: "5%"
    },
    loginButton: {
        color: "red",
        width: "25%"
    },
    tinyLogo: {
        width: 150,
        height: 150,
        marginBottom: 50
    }
});

export default LoginScreen;