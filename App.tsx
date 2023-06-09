import 'react-native-gesture-handler';

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from './src/navigation/navigators/MainNavigator';
import {AppNavigator} from './src/navigation/navigators/AppNavigator';
import {LoginForm} from './src/modules/auth/components/login-form';
import {Account} from './src/modules/account/screens/account';
import {EditScreen} from './src/modules/account/screens/editaccount';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
    </SafeAreaView>
    // <EditScreen></EditScreen>
    // <MovieList></MovieList>
    // <Account>
    // <EditScreen></EditScreen>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
