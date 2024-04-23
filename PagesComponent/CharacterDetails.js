import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const CharacterDetails = ({ route }) => {
  const { characterId } = route.params;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`http://api-fantasygame.eu-4.evennode.com/get-character/${characterId}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
      })
      .catch((error) => {
        console.error('Error fetching character details:', error);
      });
  }, []);

  if (!character) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageBackground source={{ uri: character.img }} style={styles.background}>
        <View style={styles.overlay}>
          <Text style={styles.name}>{character.name}</Text>
          <View style={styles.infoContainer}>
            <View style={[styles.infoBox, { backgroundColor: 'rgba(255, 0, 0, 0.5)' }]}>
              <Text style={styles.infoText}>Points de vie :</Text>
              <Text style={styles.infoValue}>{character.hp}</Text>
            </View>
            <View style={[styles.infoBox, { backgroundColor: 'rgba(255, 165, 0, 0.5)' }]}>
              <Text style={styles.infoText}>Points d'attaque :</Text>
              <Text style={styles.infoValue}>{character.attack_points}</Text>
            </View>
            <View style={[styles.infoBox, { backgroundColor: 'rgba(255, 255, 0, 0.5)' }]}>
              <Text style={styles.infoText}>Attaque principale :</Text>
              <Text style={styles.infoValue}>{character.main_attack}</Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{character.description}</Text>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flexGrow: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    textTransform: 'uppercase',
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  infoText: {
    fontSize: 18,
    marginRight: 10,
    color: '#fff',
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  descriptionContainer: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 5,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
});

export default CharacterDetails;
