import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
import React, { useState } from 'react';
import {
  Linking,
  Modal,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { useTheme } from '../hooks/useTheme';

export default function MoreScreen() {
  const [aboutVisible, setAboutVisible] = useState(false);

  const theme = useTheme();

  const shareApp = async () => {
    try {
      await Share.share({
        message:
          'Check out QuietHaven! Find peaceful libraries, coffee shops, and study spaces near you.',
      });
    } catch (error) {
      console.error('Error sharing app:', error);
    }
  };

  const sendFeedback = () => {
    Linking.openURL('mailto:quiethaven.app@gmail.com?subject=QuietHaven Feedback');
  }

return (
  <ScrollView
    style={[styles.screen, { backgroundColor: theme.background }]}
    showsVerticalScrollIndicator={false}
  >
    {/* HEADER */}
    <View style={[styles.header, { backgroundColor: '#1B5E20' }]}>
      <Text style={styles.headerTitle}>More</Text>

      <Text style={styles.headerSubtitle}>
        Settings and information about QuietHaven
      </Text>
    </View>

    {/* CARD */}
    <View style={[styles.card, { backgroundColor: theme.card }]}>

      {/* SHARE */}
      <TouchableOpacity
        style={styles.settingsRow}
        onPress={shareApp}
      >
        <View style={styles.iconLabelGroup}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: theme.background },
            ]}
          >
            <Feather
              name="share-2"
              size={20}
              color={theme.text}
            />
          </View>

          <Text
            style={[
              styles.settingsText,
              { color: theme.text },
            ]}
          >
            Share QuietHaven
          </Text>
        </View>

        <Feather
          name="chevron-right"
          size={20}
          color={theme.subtext}
        />
      </TouchableOpacity>

      <View
        style={[
          styles.separator,
          { backgroundColor: theme.border },
        ]}
      />

      {/* ABOUT */}
      <TouchableOpacity
        style={styles.settingsRow}
        onPress={() => setAboutVisible(true)}
      >
        <View style={styles.iconLabelGroup}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: theme.background },
            ]}
          >
            <Octicons
              name="info"
              size={20}
              color={theme.text}
            />
          </View>

          <Text
            style={[
              styles.settingsText,
              { color: theme.text },
            ]}
          >
            About QuietHaven
          </Text>
        </View>

        <Feather
          name="chevron-right"
          size={20}
          color={theme.subtext}
        />
      </TouchableOpacity>

      <View
        style={[
          styles.separator,
          { backgroundColor: theme.border },
        ]}
      />

      {/* FEEDBACK */}
      <TouchableOpacity
        style={styles.settingsRow}
        onPress={sendFeedback}
      >
        <View style={styles.iconLabelGroup}>
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: theme.background },
            ]}
          >
            <Feather
              name="mail"
              size={20}
              color={theme.text}
            />
          </View>

          <Text
            style={[
              styles.settingsText,
              { color: theme.text },
            ]}
          >
            Send Feedback
          </Text>
        </View>

        <Feather
          name="chevron-right"
          size={20}
          color={theme.subtext}
        />
      </TouchableOpacity>

    </View>

    <Modal
      visible={aboutVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalOverlay}>
        <View
          style={[
            styles.modalContent,
            { backgroundColor: theme.card },
          ]}
        >
          <Text
            style={[
              styles.modalTitle,
              { color: theme.text },
            ]}
          >
            About QuietHaven
          </Text>

          <Text
            style={[
              styles.modalText,
              { color: theme.text },
            ]}
          >
            QuietHaven helps students discover study-friendly
            locations including libraries, coffee shops,
            and academic spaces.
          </Text>

          <Text
            style={[
              styles.modalText,
              { color: theme.text },
            ]}
          >
            Features:{'\n'}
            • Verified study locations{'\n'}
            • Amenities information{'\n'}
            • Direct links to maps{'\n'}
            • Official website access
          </Text>

          <Text
            style={[
              styles.modalText,
              { color: theme.subtext },
            ]}
          >
            Version 1.0
          </Text>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setAboutVisible(false)}
          >
            <Text style={styles.closeButtonText}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

  </ScrollView>
);
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 25,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
  },

  headerSubtitle: {
    fontSize: 14,
    color: '#D1FAE5',
    marginTop: 6,
  },

  card: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 16,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },

  settingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  iconLabelGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    borderRadius: 999,
    padding: 10,
  },

  settingsText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
  },

  separator: {
    height: 1,
    marginVertical: 18,
  },
  modalOverlay: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.4)',
},

modalContent: {
  width: '85%',
  borderRadius: 20,
  padding: 24,
},

modalTitle: {
  fontSize: 22,
  fontWeight: '800',
  marginBottom: 16,
},

modalText: {
  fontSize: 15,
  lineHeight: 22,
  marginBottom: 12,
},

closeButton: {
  backgroundColor: '#1B5E20',
  padding: 14,
  borderRadius: 12,
  alignItems: 'center',
  marginTop: 10,
},

closeButtonText: {
  color: '#fff',
  fontWeight: '700',
},
});