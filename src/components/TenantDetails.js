import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { colors } from '../assets/constants/colors';
import { apartments } from '../assets/constants/apartments';

class TenantDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTenantName: "",
            newTenantPhone: "",
            newTenantEmail: "",
        };
    }

    setNewTenantName = (newName) => {
        this.setState({
            newTenantName: newName
        });
    }

    setNewTenantPhone = (newPhone) => {
        this.setState({
            newTenantPhone: newPhone
        });
    }

    setNewTenantEmail = (newEmail) => {
        this.setState({
            newTenantEmail: newEmail
        });
    }

    saveTenantDetails = () => {
        if(this.state.newTenantName === "" && this.state.newTenantPhone === "" && this.state.newTenantEmail === "") {
            alert("Debe llenar los datos");
        } else {
            alert("Inquilino modificado exitosamente!");
            this.props.navigation.goBack();
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.detailRows}>
                    <Text style={styles.textLabels}>Inquilino</Text>
                    <TextInput style={styles.textInputs} onChangeText={this.setNewTenantName}></TextInput>
                </View>
                <View style={styles.detailRows}>
                    <Text style={styles.textLabels}>Telefono</Text>
                    <TextInput style={styles.textInputs} onChangeText={this.setNewTenantPhone}></TextInput>
                </View>
                <View style={styles.detailRows}>
                    <Text style={styles.textLabels}>Correo</Text>
                    <TextInput style={styles.emailTextInput} onChangeText={this.setNewTenantEmail}></TextInput>
                </View>
                <View style={styles.detailRows}>
                    <Button title={"Atras"} onPress={() => this.props.navigation.goBack()}></Button>
                    <View style={styles.buttonSeparator}></View>
                    <Button title={"Guardar Cambios"} onPress={this.saveTenantDetails}></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors[2].colorId,
        marginBottom: "5%",
        paddingTop: "5%"
    },
    textInputs: {
        backgroundColor: colors[4].colorId,
        width: "75%",
        height: 35,
        marginBottom: "5%",
        marginLeft: 5
    },
    textLabels: {
        textAlign: "right",
        color: colors[4].colorId,
        fontSize: 18
    },
    detailRows: {
        flexDirection: "row",
        marginLeft: "5%"
    },
    emailTextInput: {
        backgroundColor: colors[4].colorId,
        width: "75%",
        height: 35,
        marginBottom: "5%",
        marginLeft: 20
    },
    buttonSeparator: {
        marginLeft: 110
    }
});

export default TenantDetails;