import { router } from 'expo-router';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Colors } from '../../constants/Colors';
import { useTheme } from '../hooks/useTheme';

export default function HomeScreen() {
  const theme = useTheme();

  const goToExplore = (filter: string) => {
    router.push({
      pathname: '/explore',
      params: { filter },
    });
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/leaf.png')}
            style={styles.logo}
          />
        </View>

        <View>
          <Text style={styles.brandTitle}>
            QuietHaven
          </Text>

          <Text style={styles.tagline}>
            Peaceful spaces for focus and relaxation
          </Text>
        </View>
      </View>

      {/* HERO TEXT */}
      <Text
        style={[
          styles.title,
          { color: theme.text },
        ]}
      >
        Find your study spot
      </Text>

      <Text
        style={[
          styles.subtitle,
          { color: theme.subtext },
        ]}
      >
        QuietHaven helps you pick the best place instantly
      </Text>

      {/* QUICK ACTIONS */}
      <View style={styles.section}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.card },
          ]}
          onPress={() => goToExplore('All')}
        >
          <Text
            style={[
              styles.buttonText,
              { color: theme.text },
            ]}
          >
            🔍 Find nearest quiet place
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.card },
          ]}
          onPress={() => goToExplore('Coffee Shop')}
        >
          <Text
            style={[
              styles.buttonText,
              { color: theme.text },
            ]}
          >
            ☕ Coffee shops 
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.card },
          ]}
          onPress={() => goToExplore('Library')}
        >
          <Text
            style={[
              styles.buttonText,
              { color: theme.text },
            ]}
          >
            📚 Libraries near me
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.card },
          ]}
          onPress={() => goToExplore('Academic Library')}
        >
          <Text
            style={[
              styles.buttonText,
              { color: theme.text },
            ]}
          >
            🎓 Campus Spaces
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },

  logo: {
    width: 35,
    height: 35,
    marginLeft: 2,
    resizeMode: 'contain',
  },

  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: Colors.light.brandSoft,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  brandTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1B4332',
  },

  tagline: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 6,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    marginTop: 10,
    paddingHorizontal: 20,
  },

  subtitle: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 30,
    paddingHorizontal: 20,
  },

  section: {
    gap: 12,
    paddingHorizontal: 20,
  },

  button: {
    padding: 16,
    borderRadius: 12,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});