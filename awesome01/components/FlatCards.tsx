import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.red]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.green]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.blue]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.yellow]}>
          <Text>Yellow</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    marginTop: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  red: {
    backgroundColor: '#EF5354',
  },
  green: {
    backgroundColor: '#8ce99a',
  },
  yellow: {
    backgroundColor: '#ffe066',
  },
  blue: {
    backgroundColor: '#4dabf7',
  },
});
