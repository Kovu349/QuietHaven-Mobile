import { locations } from '@/data/locations';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function RoomDetailsScreen() {
  const { id } = useLocalSearchParams();

  const location = locations.find(
    (item) => item.id === id
  );


  if (!location) {
    return (
      <View style={styles.center}>
        <Text>Location not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {location.name}
      </Text>

      <View style={styles.infoCard}>
        <Text style={styles.label}>📍 Address</Text>
        <Text style={styles.value}>
          {location.address}
        </Text>
      </View>

      {location.description && (
        <View style={styles.infoCard}>
          <Text style={styles.label}>📝 Notes</Text>
          <Text style={styles.value}>
            {location.description}
          </Text>
        </View>
      )}

      <View style={styles.infoCard}>
        <Text style={styles.label}>🏷 Amenities</Text>

        {location.amenities?.wifi && (
          <Text style={styles.value}>
            ✓ Wi-Fi
          </Text>
        )}

        {location.amenities?.outlets && (
          <Text style={styles.value}>
            ✓ Outlets
          </Text>
        )}

        {location.amenities?.restrooms && (
          <Text style={styles.value}>
            ✓ Restrooms
          </Text>
        )}

        {location.amenities?.seating && (
          <Text style={styles.value}>
            ✓ Seating
          </Text>
        )}

        {location.amenities?.studyRooms && (
          <Text style={styles.value}>
            ✓ Study Rooms
          </Text>
        )}

        {location.amenities?.parking && (
          <Text style={styles.value}>
            ✓ Parking
          </Text>
        )}
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={() => Linking.openURL(location.website)}>
        <Text style={styles.primaryButtonText}>
          Visit Website  
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.primaryButton} onPress={() => Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`)}>
        <Text style={styles.primaryButtonText}>
          Open in Maps
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 20,
    marginTop: 60,
  },

  infoCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
  },

  label: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },

  value: {
    fontSize: 15,
    marginBottom: 4,
  },

  primaryButton: {
    backgroundColor: '#2D6A4F',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },

  primaryButtonText: {
    color: '#fff',
    fontWeight: '700',
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: '#2D6A4F',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },

  secondaryButtonText: {
    color: '#2D6A4F',
    fontWeight: '700',
  },
});