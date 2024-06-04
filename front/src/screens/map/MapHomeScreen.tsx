import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import useAuth from '@/hooks/queries/useAuth';
<<<<<<< HEAD
=======
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
>>>>>>> 63731db (Googlemap 연동)

function MapHomeScreen() {
  const {logoutMutation} = useAuth();
  return <MapView style={styles.container} provider={PROVIDER_GOOGLE} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapHomeScreen;
