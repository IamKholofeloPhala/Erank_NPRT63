import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppContainer from '../../components/layout/AppContainer';
import AppText from '../../components/common/AppText';

export default function MarshalDashboard() {
  return (
    <AppContainer>
      <View style={styles.container}>
        <AppText variant="headingLarge">
          Marshal Dashboard
        </AppText>

        <AppText variant="bodyMedium">
          Coming Soon...
        </AppText>
      </View>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});