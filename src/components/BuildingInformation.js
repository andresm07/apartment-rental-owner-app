import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../assets/constants/colors';

class BuildingInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.push("ApartmentListScreen", { buildingId: this.props.building.id })}>
                <Image style={styles.tinyIcon} source={require("../assets/images/icons/apartment.png")} />
                <View>
                    <Text style={styles.textLabels}>{this.props.building.name}</Text>
                    <Text style={styles.textLabels}>Sociedad: {this.props.building.society}</Text>
                    <Text style={styles.textLabels}>{this.props.building.actionNumber}</Text>
                    <Text style={styles.textLabels}>Finca: {this.props.building.lotNumber}</Text>
                    <Text style={styles.textLabels}>Municipalidad: {this.props.building.municipality}</Text>
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

export default BuildingInformation;