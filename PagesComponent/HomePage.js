import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const backgroundImage = require('../assets/MainBg.jpg');

export default function HomePage() {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={[styles.title, { color: '#ffffff' }]}>Bienvenue dans les Terres de Xefi</Text>
        <Text style={[styles.paragraph, { color: '#ffffff' }]}>
          Plongez dans le monde enchanté de Legends of Xefi, un jeu de rôle épique qui vous emmène au cœur d'une saga héroïque où le destin de nombreux royaumes est en jeu. 
          Dans ce monde peuplé de créatures mythiques, de guerriers valeureux et de magiciens aux pouvoirs incommensurables, chaque choix que vous faites peut changer le cours de l'histoire.
        </Text>
        <Text style={[styles.subTitle, { color: '#ffffff' }]}>Explorez des Paysages Envoûtants</Text>
        <Text style={[styles.paragraph, { color: '#ffffff' }]}>
          Voyagez à travers des forêts ancestrales, des montagnes interdites et des royaumes souterrains oubliés. 
          Chaque région de Xefi offre ses propres défis et ses secrets à découvrir. Les graphismes somptueux et les environnements immersifs vous transportent dans un univers où la beauté se mêle au danger.
        </Text>
        <Text style={[styles.subTitle, { color: '#ffffff' }]}>Rencontrez des Personnages Inoubliables</Text>
        <Text style={[styles.paragraph, { color: '#ffffff' }]}>
          Xefi est peuplée de personnages complexes dotés de leurs propres histoires et motivations. 
          Forgez des alliances ou rivalisez avec des héros et des antagonistes qui ne sont pas toujours ce qu'ils semblent être. 
          Votre capacité à interagir avec ces personnages déterminera votre capacité à réussir dans les quêtes et à influencer le monde autour de vous.
        </Text>
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
    paddingHorizontal: 20,
    backgroundColor: 'rgba(59, 89, 152, 0.7)', // Couleur de fond légèrement transparente
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
});
