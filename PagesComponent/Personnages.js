import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importer useNavigation

const backgroundImage = require('../assets/MainBg.jpg');

export default function Personnages() {
  const [characters, setCharacters] = useState([]);
  const navigation = useNavigation(); // Utiliser useNavigation pour obtenir l'objet de navigation

  useEffect(() => {
    fetch('http://api-fantasygame.eu-4.evennode.com/get-characters')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  const getGradientColorByRarity = (rarity) => {
    switch (rarity) {
      case 0:
        return ['#0D47A1', '#E3F2FD', '#1976D2'];
      case 1:
        return ['#1B5E20', '#E8F5E9', '#388E3C'];
      case 2:
        return ['#4A148C', '#F3E5F5', '#7B1FA2'];
      case 3:
        return ['#E65100', '#FFEBEE', '#EF6C00'];
      case 4:
        return ['#B71C1C', '#FFEBEE', '#D32F2F'];
      case 5:
        return ['#FFD600', '#FFF9C4', '#FBC02D'];
      default:
        return ['#F5F5F5', '#ccc'];
    }
  };

  // Gérer le clic sur un personnage
  const handleCharacterPress = (characterId) => {
    navigation.navigate('CharacterDetails', { characterId }); // Ouvrir la page de détails du personnage avec l'ID du personnage
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Personnages</Text>
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCharacterPress(item.id)}>
              <View style={styles.characterContainer}>
                <View style={[styles.characterContent, { backgroundColor: getGradientColorByRarity(item.rarity)[1], borderColor: getGradientColorByRarity(item.rarity)[0] }]}>
                  <Text style={[styles.name, { color: getGradientColorByRarity(item.rarity)[2] }]}>{item.name}</Text>
                  <Text style={[styles.rarity, { color: getGradientColorByRarity(item.rarity)[2] }]}>Rareté : {item.rarity}</Text>
                </View>
                <View style={[styles.descriptionContainer, { backgroundColor: getGradientColorByRarity(item.rarity)[1], borderColor: getGradientColorByRarity(item.rarity)[0] }]}>
                  <Text style={[styles.description, { color: getGradientColorByRarity(item.rarity)[2] }]}>{item.description}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3B5998',
  },
  characterContainer: {
    width: '80%',
    marginBottom: 20,
  },
  characterContent: {
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderRightWidth: 5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  descriptionContainer: {
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomWidth: 4,
    borderRightWidth: 5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rarity: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});
