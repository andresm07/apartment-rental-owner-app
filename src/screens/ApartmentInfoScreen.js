import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../assets/constants/colors';
import { apartments } from '../assets/constants/apartments';

import Header from '../components/Header';
import Footer from '../components/Footer';

import ApartmentDetails from '../components/ApartmentDetails';

class ApartmentInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const apartmentCode = this.props.route.params;
        filteredApartment = apartments.filter((apartment) => {
            return apartment.apartmentCode == apartmentCode.apartmentCode;
        })[0];
        return(
            <View style={styles.container}>
                <Header />
                <ApartmentDetails apartment={filteredApartment}/>
                <Footer navigation={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors[2].colorId
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

export default ApartmentInfoScreen;