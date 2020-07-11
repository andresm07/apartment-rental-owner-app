/**
 * @format
 */

import React from 'react';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from './src/redux/reducers/index.reducers';

import 'react-native-gesture-handler';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

const AppRedux = () => {
    return(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <App></App>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => AppRedux);
