import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from './hooks/useTheme';

export default function WelcomeScreen() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <View style={styles.content}>
        <Image
          source={require('../assets/images/leaf.png')}
          style={styles.logo}
        />

        <Text
          style={[
            styles.title,
            { color: theme.brand },
          ]}
        >
          Welcome to QuietHaven
        </Text>

        <Text
          style={[
            styles.subtitle,
            { color: theme.subtext },
          ]}
        >
          Find peaceful spaces for studying, working, and focusing.
        </Text>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: theme.brand },
          ]}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.buttonText}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  logo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
  },

  button: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 16,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});