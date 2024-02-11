/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { phone } from './src/res/data';
import CarItem from './src/components/phoneitem';
import MainNavigation from './routes/nav';



const App = () => {
  const renderCars = () => {
    const carsComponent = phone.map(phone => {
      return (
        <CarItem brand={phone.brand} year={phone.year} km={phone.color} />
      );
    });

    return carsComponent;
  };

  return (
    <View style={styles.container}>
      <MainNavigation/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

