import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../assets/constants/colors';

class ApartmentInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.push("ApartmentInfoScreen", { apartmentCode: this.props.apartment.apartmentCode })}>
                <Image style={styles.tinyIcon} source={require("../assets/images/icons/home.png")} />
                <View>
                    <Text style={styles.textLabels}>Apartamento {this.props.apartment.id + 1}</Text>
                    <Text style={styles.textLabels}>Codigo: {this.props.apartment.apartmentCode}</Text>
                    <Text style={styles.textLabels}>Inquilino: {this.props.apartment.tenantName}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors[2].colorId,
        marginBottom: "5%"
    },
    tinyIcon: {
        marginRight: 15,
        width: 50,
        height: 50,
        alignSelf: "center"
    },
    textLabels: {
        color: colors[4].colorId
    }
});

export default ApartmentInformation;