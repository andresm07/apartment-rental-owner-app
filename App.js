/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import BuilidingListScreen from './src/screens/BuildingListScreen';
import ApartmentListScreen from './src/screens/ApartmentListScreen';
import ApartmentInfoScreen from './src/screens/ApartmentInfoScreen';

class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator style={ styles.containter } navigationOptions={{ headerShown: false }}>
              <Stack.Screen name="Login" component={ LoginScreen } options={{ headerShown: false }}/>
              <Stack.Screen name="BuildingListScreen" component={ BuilidingListScreen } options={{ headerShown: false }} />
              <Stack.Screen name="ApartmentListScreen" component={ ApartmentListScreen } options={{ headerShown: false }} />
              <Stack.Screen name="ApartmentInfoScreen" component={ ApartmentInfoScreen } options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

function mapStateToProps(state) {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
