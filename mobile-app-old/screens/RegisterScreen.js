// mobile-app/screens/RegisterScreen.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

export default function RegisterScreen({ navigate }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Create E-Rank Profile</Text>
        <Text style={styles.subtitle}>Select your portal role clearance matrix</Text>
        
        <TouchableOpacity style={styles.button} onPress={() => navigate('Login')}>
          <Text style={styles.btnText}>Return to Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617', justifyContent: 'center', padding: 24 },
  card: { backgroundColor: '#0F172A', borderWidth: 1, borderColor: '#1E293B', borderRadius: 12, padding: 24, alignItems: 'center' },
  title: { fontSize: 20, fontWeight: '900', color: '#FFFFFF' },
  subtitle: { fontSize: 12, color: '#64748B', marginTop: 4, marginBottom: 24 },
  button: { backgroundColor: '#29B6F6', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 8 },
  btnText: { color: '#020617', fontWeight: '800', fontSize: 13 }
});