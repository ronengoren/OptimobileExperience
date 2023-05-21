import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const ScrollHeader = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <ScrollView style={styles.content}>
        {/* Add your scrollable content here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#2196F3',
    padding: 16,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginTop: 8,
  },
  content: {
    padding: 16,
  },
});

export default ScrollHeader;
