import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { locations } from '../../data/locations';
import { useTheme } from '../hooks/useTheme';

export default function ExploreScreen() {
  const theme = useTheme();

  const { filter } = useLocalSearchParams();

  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState(
    typeof filter === 'string' ? filter : 'All'
  );

  useEffect(() => {
    if (typeof filter === 'string') {
      setActiveFilter(filter);
    }
  }, [filter]);

  const filters = [
    'All',
    'Library',
    'Coffee Shop',
    'Academic Library',
  ];

  const filteredLocations = locations.filter((item) => {
    const matchesFilter =
      activeFilter === 'All' ||
      item.category === activeFilter;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
      showsVerticalScrollIndicator={false}
    >
      {/* TITLE */}
      <Text
        style={[
          styles.title,
          { color: theme.text },
        ]}
      >
        Explore Spaces
      </Text>

      {/* SEARCH */}
      <View
        style={[
          styles.searchContainer,
          {
            backgroundColor: theme.card,
            borderColor: theme.border,
          },
        ]}
      >
        <Ionicons
          name="search"
          size={20}
          color={theme.subtext}
        />

        <TextInput
          placeholder="Search locations..."
          placeholderTextColor={theme.subtext}
          value={search}
          onChangeText={setSearch}
          style={[
            styles.input,
            { color: theme.text },
          ]}
        />
      </View>

      {/* FILTERS */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 20 }}
      >
        {filters.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setActiveFilter(item)}
            style={[
              styles.filterChip,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
              activeFilter === item &&
                styles.activeChip,
            ]}
          >
            <Text
              style={
                activeFilter === item
                  ? styles.activeText
                  : [
                      styles.text,
                      { color: theme.subtext },
                    ]
              }
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* LIST */}
      <View style={{ padding: 20 }}>
        {filteredLocations.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              router.push(`/location/${item.id}`)
            }
            style={[
              styles.card,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <Text
              style={[
                styles.name,
                { color: theme.text },
              ]}
            >
              {item.name}
            </Text>

            <Text
              style={[
                styles.meta,
                { color: theme.subtext },
              ]}
            >
              {item.category} 
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },

  title: {
    fontSize: 22,
    fontWeight: '800',
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 12,
    borderRadius: 14,
    height: 45,
    marginBottom: 15,
    borderWidth: 1,
  },

  input: {
    marginLeft: 10,
    flex: 1,
  },

  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
  },

  activeChip: {
    backgroundColor: '#2D6A4F',
    borderColor: '#2D6A4F',
  },

  text: {
    fontSize: 12,
  },

  activeText: {
    fontSize: 12,
    color: '#fff',
  },

  card: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
  },

  meta: {
    fontSize: 13,
    marginTop: 4,
  },
});