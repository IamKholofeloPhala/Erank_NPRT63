// mobile-app/screens/dashboard/AdminDashboard.js
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';

export default function AdminDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>E-Rank Global Admin</Text>
        <View style={styles.sysBadge}>
          <Text style={styles.sysText}>PROD MATRIX ACTIVE</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>PLATFORM METRIC HEURISTICS</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Active Commuter Terminals</Text>
          <Text style={styles.cardValue}>48 Ranks</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Global Verified Accounts</Text>
          <Text style={styles.cardValue}>1,240 Profiles</Text>
        </View>

        <View style={[styles.card, { borderColor: '#EF4444' }]}>
          <Text style={[styles.cardTitle, { color: '#EF4444' }]}>Pending Database Alerts</Text>
          <Text style={styles.cardValue}>0 Flags</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderColor: '#1E293B', backgroundColor: '#0F172A' },
  title: { fontSize: 18, fontWeight: '900', color: '#FFFFFF' },
  sysBadge: { backgroundColor: 'rgba(0, 230, 118, 0.1)', borderWidth: 1, borderColor: '#00E676', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4 },
  sysText: { color: '#00E676', fontSize: 8, fontWeight: '800' },
  scrollContent: { padding: 20 },
  label: { fontSize: 11, fontWeight: '800', color: '#64748B', letterSpacing: 1, marginBottom: 14 },
  card: { backgroundColor: '#0F172A', borderWidth: 1, borderColor: '#1E293B', borderRadius: 12, padding: 18, marginBottom: 12 },
  cardTitle: { fontSize: 12, color: '#94A3B8', fontWeight: '700' },
  cardValue: { fontSize: 24, fontWeight: '900', color: '#FFFFFF', marginTop: 6 }
});