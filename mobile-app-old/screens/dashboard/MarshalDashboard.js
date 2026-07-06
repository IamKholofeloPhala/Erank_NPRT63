import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';

export default function MarshalDashboard({ navigate }) {
  // Mocking the digital logbook replacing paper sheets
  const [queue, setQueue] = useState([
    { id: '1', reg: 'CZ 88 YK GP', driver: 'Sizwe Ngcobo', load: '1', status: 'loading', capacity: 15 },
    { id: '2', reg: 'FB 23 MM NW', driver: 'Jabu Khumalo', load: '2', status: 'waiting', capacity: 15 },
    { id: '3', reg: 'DL 99 GG L', driver: 'Thabo Mokoena', load: '3', status: 'waiting', capacity: 21 },
  ]);

  const handleStatusChange = (id, nextStatus) => {
    setQueue(prev => prev.map(item => item.id === id ? { ...item, status: nextStatus } : item));
  };

  const skipDriver = (id) => {
    alert('Driver flagged as absent. Advancing queue order.');
    setQueue(prev => prev.filter(item => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.rankTitle}>Bree Street Taxi Rank</Text>
          <Text style={styles.roleBadge}>MARSHAL TERMINAL</Text>
        </View>
        <TouchableOpacity style={styles.qrBtn} onPress={() => navigate('QRDisplayScreen')}>
          <Text style={styles.qrBtnText}>SHOW QR</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollArea}>
        <Text style={styles.sectionHeader}>LIVE DIGITAL QUEUE ({queue.length} Vehicles)</Text>
        
        {queue.map((taxi) => (
          <View key={taxi.id} style={[styles.card, taxi.status === 'loading' && styles.loadingCard]}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.registration}>{taxi.reg}</Text>
                <Text style={styles.driverSub}>{taxi.driver} • {taxi.capacity} Seater</Text>
              </View>
              <View style={styles.loadBadge}>
                <Text style={styles.loadNo}>#{taxi.load}</Text>
              </View>
            </View>

            <View style={styles.actionRow}>
              {taxi.status === 'waiting' && (
                <>
                  <TouchableOpacity style={styles.loadActionBtn} onPress={() => handleStatusChange(taxi.id, 'loading')}>
                    <Text style={styles.btnText}>START LOADING</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.skipBtn} onPress={() => skipDriver(taxi.id)}>
                    <Text style={styles.skipText}>SKIP</Text>
                  </TouchableOpacity>
                </>
              )}

              {taxi.status === 'loading' && (
                <>
                  <TouchableOpacity style={styles.fullActionBtn} onPress={() => handleStatusChange(taxi.id, 'full')}>
                    <Text style={styles.btnTextDark}>MARK FULL</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.departActionBtn} onPress={() => alert('Trip Dispatched. Logging Departure Time.')}>
                    <Text style={styles.btnText}>DISPATCH</Text>
                  </TouchableOpacity>
                </>
              )}
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
  rankTitle: { fontSize: 18, fontWeight: '900', color: '#FFFFFF' },
  roleBadge: { fontSize: 10, fontWeight: '800', color: '#00E676', marginTop: 2 },
  qrBtn: { backgroundColor: '#29B6F6', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 6 },
  qrBtnText: { color: '#020617', fontSize: 11, fontWeight: '800' },
  scrollArea: { padding: 20 },
  sectionHeader: { fontSize: 11, fontWeight: '800', color: '#64748B', letterSpacing: 1, marginBottom: 14 },
  card: { backgroundColor: '#0F172A', borderWidth: 1, borderColor: '#1E293B', borderRadius: 12, padding: 16, marginBottom: 12 },
  loadingCard: { borderColor: '#00E676', backgroundColor: 'rgba(0, 230, 118, 0.02)' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  registration: { fontSize: 16, fontWeight: '800', color: '#F8FAFC' },
  driverSub: { fontSize: 12, color: '#94A3B8', marginTop: 2 },
  loadBadge: { backgroundColor: '#1E293B', width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  loadNo: { color: '#00E676', fontWeight: '900', fontSize: 14 },
  actionRow: { flexDirection: 'row', gap: 8, marginTop: 14, borderTopWidth: 1, borderColor: 'rgba(30, 41, 59, 0.5)', paddingTop: 12 },
  loadActionBtn: { flex: 1, backgroundColor: '#1E293B', padding: 10, borderRadius: 6, alignItems: 'center', borderWidth: 1, borderColor: '#334155' },
  fullActionBtn: { flex: 1, backgroundColor: '#00E676', padding: 10, borderRadius: 6, alignItems: 'center' },
  departActionBtn: { flex: 1, backgroundColor: '#29B6F6', padding: 10, borderRadius: 6, alignItems: 'center' },
  skipBtn: { paddingHorizontal: 16, justifyContent: 'center', alignItems: 'center', borderRadius: 6, borderWidth: 1, borderColor: '#EF4444' },
  btnText: { color: '#FFFFFF', fontSize: 11, fontWeight: '700' },
  btnTextDark: { color: '#020617', fontSize: 11, fontWeight: '800' },
  skipText: { color: '#EF4444', fontSize: 11, fontWeight: '700' }
});