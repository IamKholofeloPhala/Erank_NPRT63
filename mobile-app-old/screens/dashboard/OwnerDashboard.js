// mobile-app/screens/dashboard/OwnerDashboard.js
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';

export default function OwnerDashboard({ navigate }) {
  // Mock data matching pre-loaded structures for fleet metrics
  const [fleetStats] = useState({
    totalRides: 142,
    totalRevenue: 31240,
    activeDrivers: 4
  });

  const [taxis, setTaxis] = useState([
    { id: '1', reg: 'BC 44 KK GP', driver: 'Muzi Khumalo', status: 'On Route', capacity: 15, fare: 22 },
    { id: '2', reg: 'NX 91 LL NW', driver: 'Dumisani Dlamini', status: 'Queued', capacity: 21, fare: 30 },
    { id: '3', reg: 'GP 77 MM L', driver: 'Sello Mokoena', status: 'Offline', capacity: 15, fare: 18 }
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.ownerName}>Thabo Mokoena</Text>
          <Text style={styles.roleBadge}>FLEET OWNER CONSOLE</Text>
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={() => alert('Opening Add Taxi Provision Module...')}>
          <Text style={styles.addBtnText}>+ ADD TAXI</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollArea} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionHeader}>FLEET MATRIX ATTRIBUTES</Text>
        
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>TOTAL REVENUE</Text>
            <Text style={styles.statValue}>R {fleetStats.totalRevenue}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>TOTAL DISPATCHES</Text>
            <Text style={styles.statValue}>{fleetStats.totalRides}</Text>
          </View>
        </View>

        <Text style={styles.sectionHeader}>MANAGED VEHICLES ({taxis.length})</Text>

        {taxis.map((taxi) => (
          <View key={taxi.id} style={styles.taxiCard}>
            <View style={styles.taxiHeader}>
              <View>
                <Text style={styles.taxiReg}>{taxi.reg}</Text>
                <Text style={styles.driverSub}>Driver: {taxi.driver}</Text>
              </View>
              <View style={[
                styles.statusIndicator, 
                taxi.status === 'On Route' && styles.statusRoute,
                taxi.status === 'Queued' && styles.statusQueued
              ]}>
                <Text style={styles.statusText}>{taxi.status.toUpperCase()}</Text>
              </View>
            </View>

            <View style={styles.metaRow}>
              <Text style={styles.metaText}>{taxi.capacity} Seats</Text>
              <Text style={styles.metaText}>Base Fare: R {taxi.fare}</Text>
            </View>

            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.manageBtn} onPress={() => alert(`Modifying Driver profile for ${taxi.reg}`)}>
                <Text style={styles.manageBtnText}>REASSIGN DRIVER</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderColor: '#1E293B', backgroundColor: '#0F172A' },
  ownerName: { fontSize: 18, fontWeight: '900', color: '#FFFFFF' },
  roleBadge: { fontSize: 10, fontWeight: '800', color: '#29B6F6', marginTop: 2 },
  addBtn: { backgroundColor: '#00E676', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 6 },
  addBtnText: { color: '#020617', fontSize: 11, fontWeight: '800' },
  scrollArea: { padding: 20 },
  sectionHeader: { fontSize: 11, fontWeight: '800', color: '#64748B', letterSpacing: 1, marginBottom: 14, marginTop: 10 },
  statsGrid: { flexDirection: 'row', gap: 12, marginBottom: 24 },
  statCard: { flex: 1, backgroundColor: '#0F172A', borderWidth: 1, borderColor: '#1E293B', borderRadius: 12, padding: 16 },
  statLabel: { fontSize: 9, fontWeight: '800', color: '#94A3B8', letterSpacing: 0.5 },
  statValue: { fontSize: 20, fontWeight: '900', color: '#FFFFFF', marginTop: 6 },
  taxiCard: { backgroundColor: '#0F172A', borderWidth: 1, borderColor: '#1E293B', borderRadius: 12, padding: 16, marginBottom: 12 },
  taxiHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  taxiReg: { fontSize: 16, fontWeight: '800', color: '#F8FAFC' },
  driverSub: { fontSize: 12, color: '#64748B', marginTop: 2 },
  statusIndicator: { backgroundColor: '#334155', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 },
  statusRoute: { backgroundColor: 'rgba(41, 182, 246, 0.1)', borderWidth: 1, borderColor: '#29B6F6' },
  statusQueued: { backgroundColor: 'rgba(0, 230, 118, 0.1)', borderWidth: 1, borderColor: '#00E676' },
  statusText: { color: '#F8FAFC', fontSize: 9, fontWeight: '800' },
  metaRow: { flexDirection: 'row', gap: 16, marginTop: 12 },
  metaText: { fontSize: 12, color: '#94A3B8', fontWeight: '600' },
  actionRow: { marginTop: 14, borderTopWidth: 1, borderColor: 'rgba(30, 41, 59, 0.5)', paddingTop: 12 },
  manageBtn: { backgroundColor: '#1E293B', borderWidth: 1, borderColor: '#334155', padding: 10, borderRadius: 6, alignItems: 'center' },
  manageBtnText: { color: '#FFFFFF', fontSize: 11, fontWeight: '700' }
});