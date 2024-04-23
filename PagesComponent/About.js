import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function About() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (email && subject && message) {
      Alert.alert('Formulaire envoyé !', 'Merci pour votre message.');
    } else {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
    }
  };

  const handlePressOutside = () => {
    Keyboard.dismiss(); // Fermer le clavier lorsque l'utilisateur clique en dehors du champ de saisie
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <View style={styles.container}>
        <Text style={styles.title}>A Propos</Text>
        <Text style={styles.subtitle}>Mystic Forge Studios</Text>
        <Text style={styles.paragraph}>
          Situés au cœur de l'innovation et de la créativité, nous sommes une équipe passionnée de développeurs, de designers et de conteurs dédiée à la création d'expériences vidéoludiques immersives et captivantes.
        </Text>

        <Text style={styles.subtitle}>Notre Mission</Text>
        <Text style={styles.paragraph}>
          Chez Mystic Forge Studios, notre mission est de transcender les frontières traditionnelles du jeu vidéo pour offrir des aventures uniques et mémorables. Nous croyons en la puissance du jeu pour rassembler les gens, raconter des histoires profondes et offrir des expériences enrichissantes qui restent avec les joueurs longtemps après qu'ils aient mis de côté leur console.
        </Text>

        <Text style={styles.title}>Contact</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Sujet"
          value={subject}
          onChangeText={setSubject}
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Message"
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <Button title="Envoyer" onPress={handleSubmit} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3B5998',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3B5998',
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 20,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  messageInput: {
    height: 100,
  },
});
