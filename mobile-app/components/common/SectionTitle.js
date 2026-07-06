import React from 'react';
import { View } from 'react-native';

import AppText from './AppText';

export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <View style={{ marginBottom: 18 }}>
      <AppText variant="headingMedium">
        {title}
      </AppText>

      {subtitle ? (
        <AppText
          variant="bodyMedium"
          style={{ marginTop: 4 }}
        >
          {subtitle}
        </AppText>
      ) : null}
    </View>
  );
}