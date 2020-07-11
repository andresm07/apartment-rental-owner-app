import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../assets/constants/colors';
import { buildings } from '../assets/constants/buildings';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BuildingInformation from '../components/BuildingInformation';

class BuilidingListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    renderedBuildings = () => {
        return buildings.map((building) => {
            return(
                <View key={building.id}>
                    <BuildingInformation building={building} navigation={this.props.navigation}/>
                </View>
            )
        })
    }
    render() {
        return(
            <View style={styles.container}>
                <Header />
                <ScrollView style={styles.scrollview}>
                    {this.renderedBuildings()}
                </ScrollView>
                <Footer navigation={this.props.navigation}/>
            </View>
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
    scrollview: {
        width: "95%",
        marginLeft: "5%",
    }
});

export default BuilidingListScreen;