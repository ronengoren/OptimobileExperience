import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import NavBar from '../components/navbars/NavBar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <NavBar
        title="My Store"
        onCartPress={() => console.log('Cart pressed')}
      />

      {/* <View style={styles.banner}>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.bannerImage}
          resizeMode="cover"
        />
      </View> */}
      <View style={styles.products}>
        <View style={styles.product}>
          <Image
            source={require('../../assets/product1.png')}
            style={styles.productImage}
            resizeMode="cover"
          />
          <Text style={styles.productName}>Product 1</Text>
          <Text style={styles.productPrice}>$10.00</Text>
        </View>
        <View style={styles.product}>
          <Image
            source={require('../../assets/product2.jpg')}
            style={styles.productImage}
            resizeMode="cover"
          />
          <Text style={styles.productName}>Product 2</Text>
          <Text style={styles.productPrice}>$20.00</Text>
        </View>
        <View style={styles.product}>
          <Image
            source={require('../../assets/product3.jpg')}
            style={styles.productImage}
            resizeMode="cover"
          />
          <Text style={styles.productName}>Product 3</Text>
          <Text style={styles.productPrice}>$30.00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 80,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 120,
  },
  banner: {
    height: 200,
    marginVertical: 16,
  },
  bannerImage: {
    flex: 1,
  },
  products: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  product: {
    width: '30%',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 8,
  },
  productImage: {
    height: 100,
    width: '100%',
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
});

export default HomeScreen;
