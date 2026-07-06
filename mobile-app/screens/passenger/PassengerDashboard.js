import React from 'react';
import {
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import AppContainer from '../../components/layout/AppContainer';

import GreetingHeader from '../../components/dashboard/GreetingHeader';
import SearchCard from '../../components/dashboard/SearchCard';
import StatsGrid from '../../components/dashboard/StatsGrid';
import NewsCard from '../../components/dashboard/NewsCard';
import QuickActions from '../../components/dashboard/QuickActions';

import colors from '../../theme/colors';

import usePassengerDashboard from '../../hooks/usePassengerDashboard';

export default function PassengerDashboard() {
  const {
    data,
    loading,
    refresh,
  } = usePassengerDashboard();

  if (loading) {
    return (
      <AppContainer>
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={styles.loader}
        />
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <GreetingHeader
          greeting={data.greeting}
          name={data.passengerName}
        />

        <SearchCard
          onPress={() => {}}
        />

        <StatsGrid
          availability={data.availability}
        />

        <NewsCard
          news={data.news}
        />

        <QuickActions />

      </ScrollView>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
  },
});