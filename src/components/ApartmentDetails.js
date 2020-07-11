import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../assets/constants/colors';

class ApartmentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.detailRows}>
                    <Image style={styles.tinyIcon} source={require("../assets/images/icons/room.png")} />
                    <View >
                        <Text style={styles.textLabels}>Aparamento {this.props.apartment.id + 1}</Text>
                        <Text style={styles.textLabels}>Codigo: {this.props.apartment.apartmentCode}</Text>
                    </View>
                </View>
                <View style={styles.detailRows}>
                    <View  style={styles.topSeparator}>
                        <Text style={styles.textLabels}>Monto: {this.props.apartment.amount}</Text>
                        <Text style={styles.textLabels}>Deposito: {this.props.apartment.paymentDeposit}</Text>
                        <Text style={styles.textLabels}>Fecha de Pago: {this.props.apartment.paymentDate}</Text>
                    </View>
                    <View  style={styles.topLeftSeparator}>
                        <Text style={styles.textLabels}>Telefono: {this.props.apartment.phoneNumber}</Text>
                        <Text style={styles.textLabels}>Agua: {this.props.apartment.waterService}</Text>
                        <Text style={styles.textLabels}>Luz: {this.props.apartment.lightService}</Text>
                    </View>
                </View>
                <View style={styles.detailRows}>
                    <View style={styles.topSeparator}>
                        <Text style={styles.textLabels}>Inquilino: {this.props.apartment.tenantName}</Text>
                        <Text style={styles.textLabels}>Fecha Inicio: {this.props.apartment.start}</Text>
                    </View>
                    <Image style={styles.tenantTinyIcon} source={require("../assets/images/icons/tenant.png")} />
                </View>
                <View style={styles.detailRows}>
                    <View style={styles.topSeparator}>
                        <Text style={styles.textLabels}>Fotos:</Text>
                    </View>
                </View>
                <View style={styles.detailRows}>
                    <View style={styles.topImageSeparator}>
                        <Image style={styles.tinyImage} source={require("../assets/images/icons/image1.png")} />
                    </View>
                    <View style={styles.topLeftImageSeparator}>
                        <Image style={styles.tinyImage} source={require("../assets/images/icons/image2.png")} />
                    </View>
                    <View style={styles.topLeftImageSeparator}>
                        <Image style={styles.tinyImage} source={require("../assets/images/icons/image3.png")} />
                    </View>
                </View>
                <View style={styles.detailRows}>
                    <View style={styles.topImageSeparator}>
                        <Image style={styles.tinyImage} source={require("../assets/images/icons/image4.png")} />
                    </View>
                    <View style={styles.topLeftImageSeparator}>
                        <Image style={styles.tinyImage} source={require("../assets/images/icons/image5.png")} />
                    </View>
                </View>
            </View>
        );
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
        alignSelf: "center",
    },
    tenantTinyIcon: {
        marginLeft: 100,
        width: 50,
        height: 50,
        alignSelf: "center",
        marginTop: 50
    },
    detailRows: {
        flexDirection: "row",
        marginLeft: "5%"
    },
    textLabels: {
        color: colors[4].colorId
    },
    topSeparator: {
        marginTop: "20%"
    },
    topLeftSeparator: {
        marginTop: "20%",
        marginLeft: "5%"
    },
    topImageSeparator: {
        marginTop: "5%"
    },  
    topLeftImageSeparator: {
        marginTop: "5%",
        marginLeft: "15%"
    },
    tinyImage: {
        width: 75,
        height: 75
    }
});

export default ApartmentDetails;