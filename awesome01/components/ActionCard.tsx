import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in JS 21 - ES12</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year
            javascriipt is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              );
            }}>
            <Text style={styles.socialLinks}>Read more...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              openWebsite('https://www.instagram.com/hiteshchoudharyofficial/');
            }}>
            <Text style={styles.socialLinks}>Follow me 🎉</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    marginTop: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#555',
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    padding: 20,
  },
  cardElevated: {
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#999',
    shadowOpacity: 0.9,
    shadowRadius: 8,
  },
  headingContainer: {
    display: 'flex',
    alignSelf: 'flex-start',
  },
  headerText: {
    fontSize: 18,
    marginBottom: 20,
  },
  cardImage: {
    height: 200,
    width: 380,
    borderRadius: 10,
    marginBottom: 10,
  },
  bodyContainer: {
    marginBottom: 20,
  },
  socialLinks: {
    backgroundColor: '#4dabf7',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    fontSize: 15,
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
  },
});
