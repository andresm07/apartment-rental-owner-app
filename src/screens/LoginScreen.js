import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';
import { colors } from '../assets/constants/colors';
import { Switch } from 'react-native-gesture-handler';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            showPassword: true
        }
    }

    toggleSwitch = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    setUsername = (username) => {
        this.setState({
            username: username
        });
    }

    setPassword = (password) => {
        this.setState({
            password: password
        });
    }

    validateLogin = () => {
        if(this.state.username === "admin" && this.state.password === "admin") {
            this.props.navigation.navigate("BuildingListScreen");
        } else {
            alert("Invalid credentials");
        }
    }

    render() {
        return(
            <>
                <View style={styles.container}>
                    <Image source={require("../assets/images/icons/login.png")} style={styles.tinyLogo}></Image>
                    <Text style={styles.textLabels}>Username</Text>
                    <TextInput style={styles.textInputs} onChangeText={this.setUsername}></TextInput>
                    <Text style={styles.textLabels}>Password</Text>
                    <TextInput secureTextEntry={this.state.showPassword} style={styles.textInputs} onChangeText={this.setPassword}></TextInput>
                    <Switch onValueChange={this.toggleSwitch} value={this.state.showPassword}></Switch>
                    <Text style={styles.hidePasswordLabel}>Hide Password</Text>
                    <Button title="Login" style={styles.loginButton} onPress={this.validateLogin}></Button>
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
        height: 35,
        marginBottom: "5%"
    },
    hidePasswordLabel: {
        marginBottom: 50,
        textAlign: "right",
        color: colors[4].colorId,
        fontSize: 18
    },
    tinyLogo: {
        width: 150,
        height: 150,
        marginBottom: 50
    }
});

export default LoginScreen;