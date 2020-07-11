import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { colors } from '../assets/constants/colors';

class Footer extends Component {
    render() {
        return(
            <View style={styles.mainBackgrond}>
                <TouchableOpacity style={styles.touchable}>
                    <Image source={require("../assets/images/icons/logout.png")} style={styles.tinyIcon} />
                    <Text style={styles.textLabels}>Cerrar Sesion</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}>
                    <Image source={require("../assets/images/icons/main.png")} style={styles.tinyIcon} />
                    <Text style={styles.textLabels}>Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}>
                    <Image source={require("../assets/images/icons/settings.png")} style={styles.tinyIcon} />
                    <Text style={styles.textLabels}>Configuracion</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainBackgrond: {
        flexDirection: "row",
        backgroundColor: colors[0].colorId,
        alignItems: "stretch",
        justifyContent: "center",
        height: 60,
        width: "100%"
    },
    touchable: {
        alignItems: "center"
    },
    tinyIcon: {
        justifyContent: "flex-end",
        alignSelf: "center",
        width: 25,
        height: 25,
        marginTop: 12.5,
        marginLeft: "15%"
    },
    textLabels: {
        color: colors[4].colorId,
        marginLeft: 30,
        marginRight: 18
    },
});

export default Footer;