/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {default as App} from './src/App.bs';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
