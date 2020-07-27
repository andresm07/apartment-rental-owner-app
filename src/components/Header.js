import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { colors } from '../assets/constants/colors';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterCriteria: ""
        };
    }

    setFilterCriteria = (filterCriteria) => {
        this.setState({
            filterCriteria: filterCriteria
        });
    }

    render() {
        return(
            <View style={styles.mainBackgrond}>
                <TextInput style={styles.searchInput} onChangeText={this.setFilterCriteria}></TextInput>
                <TouchableOpacity style={styles.touchable}>
                    <Image source={require("../assets/images/icons/magnifying-glass.png")} style={styles.tinyIcon} />
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
        height: 50,
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
        marginTop: 12.5
    },
    searchInput: {
        borderBottomColor: colors[3].colorId,
        color: colors[4].colorId,
        width: "80%",
    }
});

export default Header;