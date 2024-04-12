import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import HomePage from './PagesComponent/HomePage';
import SearchPage from './PagesComponent/SearchPage';
import SearchResultPage from './PagesComponent/SearchResultPage';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const CustomDrawerContent = ({ navigation }) => {
  const menuItems = [
    { label: 'Accueil', icon: 'home', screen: 'Home' },
    { label: 'Recherche', icon: 'search', screen: 'Search' },
  ];

  return (
    <View style={styles.drawerContent}>
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.drawerItem}
          onPress={() => navigation.navigate(item.screen)}
        >
          <FontAwesome name={item.icon} size={24} color="#333" style={styles.drawerIcon} />
          <Text style={styles.drawerLabel}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}
        drawerStyle={{
          backgroundColor: '#f2f2f2',
          width: 240,
        }}
        drawerContentOptions={{
          activeTintColor: '#007bff',
        }}
      >
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Search" component={SearchStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchPage} />
      <Stack.Screen name="SearchResult" component={SearchResultPage} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  drawerIcon: {
    marginRight: 15,
  },
  drawerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
