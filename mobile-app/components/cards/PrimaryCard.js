import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../../theme/colors';
import spacing from '../../theme/spacing';

export default function PrimaryCard({ children, style }) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: spacing.radiusLarge,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,

    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 8,
  },
});