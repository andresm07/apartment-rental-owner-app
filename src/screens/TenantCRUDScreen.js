import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { colors } from '../assets/constants/colors';
import { apartments } from '../assets/constants/apartments';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TenantDetails from '../components/TenantDetails';

class TenantCRUDScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { apartmentId, apartmentCode } = this.props.route.params;
        console.log
        return(
            <View style={styles.container}>
                <Header />
                <TenantDetails navigation={this.props.navigation} apartmentId={apartmentId} apartmentCode={apartmentCode}/>
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
});

export default TenantCRUDScreen;