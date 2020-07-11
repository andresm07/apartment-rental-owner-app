import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../assets/constants/colors';
import { apartments } from '../assets/constants/apartments';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ApartmentInformation from '../components/ApartmentInformation';

class ApartmentListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    renderedApartments = (buildingId) => {
        filteredApartments = apartments.filter((apartment) => {
            return apartment.buildingId == buildingId.buildingId;
        })
        return filteredApartments.map((apartment) => {
            return(
                <View key={apartment.apartmentCode}>
                    <ApartmentInformation apartment={apartment} navigation={this.props.navigation}/>
                </View>
            )
        })
    }
    render() {
        const buildingId = this.props.route.params;
        return(
            <View style={styles.container}>
                <Header />
                <ScrollView style={styles.scrollview}>
                    {this.renderedApartments(buildingId)}
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

export default ApartmentListScreen;