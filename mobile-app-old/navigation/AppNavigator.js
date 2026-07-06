// mobile-app/navigation/AppNavigator.js
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MarshalDashboard from '../screens/dashboard/MarshalDashboard';
import PassengerDashboard from '../screens/dashboard/PassengerDashboard';
import OwnerDashboard from '../screens/dashboard/OwnerDashboard';
import AdminDashboard from '../screens/dashboard/AdminDashboard';
import QRDisplayScreen from '../screens/QRDisplayScreen';
import QRScanScreen from '../screens/QRScanScreen';
import DirectionsScreen from '../screens/DirectionsScreen';

export default function AppNavigator() {
  const [currentScreen, setCurrentScreen] = useState('Login');

  const navigate = (screenName) => {
    setCurrentScreen(screenName);
  };

  return (
    <View style={styles.container}>
      {/* Active Screen Window */}
      <View style={styles.screenContainer}>
        {currentScreen === 'Login' && <LoginScreen navigate={navigate} />}
        {currentScreen === 'Register' && <RegisterScreen navigate={navigate} />}
        {currentScreen === 'MarshalDashboard' && <MarshalDashboard navigate={navigate} />}
        {currentScreen === 'PassengerDashboard' && <PassengerDashboard navigate={navigate} />}
        {currentScreen === 'OwnerDashboard' && <OwnerDashboard navigate={navigate} />}
        {currentScreen === 'AdminDashboard' && <AdminDashboard navigate={navigate} />}
        {currentScreen === 'QRDisplayScreen' && <QRDisplayScreen navigate={navigate} />}
        {currentScreen === 'QRScanScreen' && <QRScanScreen navigate={navigate} />}
        {currentScreen === 'DirectionsScreen' && <DirectionsScreen navigate={navigate} />}
      </View>

      {/* Temporary Test Menu Dock */}
      <View style={styles.testMenuDock}>
        <Text style={styles.dockTitle}>EXPO TEST MATRIX NAVIGATOR</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.dockScroll}>
          {['Login', 'Register', 'MarshalDashboard', 'PassengerDashboard', 'OwnerDashboard', 'AdminDashboard', 'QRDisplayScreen', 'QRScanScreen', 'DirectionsScreen'].map((screen) => (
            <TouchableOpacity 
              key={screen} 
              style={[styles.dockBtn, currentScreen === screen && styles.dockBtnActive]} 
              onPress={() => setCurrentScreen(screen)}
            >
              <Text style={[styles.dockBtnText, currentScreen === screen && styles.dockBtnTextActive]}>
                {screen.replace('Dashboard', '')}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  screenContainer: { flex: 1 },
  testMenuDock: { backgroundColor: '#0F172A', borderTopWidth: 2, borderColor: '#29B6F6', paddingVertical: 10 },
  dockTitle: { fontSize: 9, fontWeight: '900', color: '#29B6F6', textAlign: 'center', letterSpacing: 1, marginBottom: 6 },
  dockScroll: { paddingHorizontal: 12, gap: 8 },
  dockBtn: { backgroundColor: '#1E293B', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6, borderWidth: 1, borderColor: '#334155' },
  dockBtnActive: { backgroundColor: '#00E676', borderColor: '#00E676' },
  dockBtnText: { color: '#94A3B8', fontSize: 11, fontWeight: '700' },
  dockBtnTextActive: { color: '#020617', fontWeight: '800' }
});