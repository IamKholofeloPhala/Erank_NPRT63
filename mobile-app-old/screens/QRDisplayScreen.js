// mobile-app/screens/QRDisplayScreen.js
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';

export default function QRDisplayScreen({ navigate }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigate('MarshalDashboard')}>
          <Text style={styles.backBtnText}>← BACK TO QUEUE</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Gate Check-In Node</Text>
      </View>

      <View style={styles.centerControl}>
        <Text style={styles.rankLabel}>BREE STREET TAXI RANK</Text>
        <Text style={styles.instruction}>Drivers must scan this node to register physical presence</Text>
        
        {/* Visual representation of the active Base64 QR code matrix */}
        <View style={styles.qrMatrixContainer}>
          <View style={styles.qrCornerSquare} />
          <View style={[styles.qrCornerSquare, { right: 24 }]} />
          <View style={[styles.qrCornerSquare, { bottom: 24 }]} />
          
          <View style={styles.qrInnerDataPattern}>
            <Text style={styles.matrixText}>E-RANK SECURE GATEWAY ACTIVE</Text>
            <Text style={styles.timestampText}>SYNC: {new Date().toLocaleTimeString()}</Text>
          </View>
        </View>

        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>● BROADCASTING ENTRY STREAM</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderColor: '#1E293B', backgroundColor: '#0F172A' },
  backBtn: { marginRight: 16, backgroundColor: '#1E293B', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  backBtnText: { color: '#94A3B8', fontSize: 11, fontWeight: '700' },
  headerTitle: { fontSize: 16, fontWeight: '800', color: '#FFFFFF' },
  centerControl: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  rankLabel: { fontSize: 20, fontWeight: '900', color: '#FFFFFF', letterSpacing: 0.5 },
  instruction: { fontSize: 12, color: '#64748B', marginTop: 6, marginBottom: 32, textAlign: 'center' },
  qrMatrixContainer: { width: 260, height: 260, backgroundColor: '#FFFFFF', borderRadius: 16, padding: 24, position: 'relative', justifyContent: 'center', alignItems: 'center', elevation: 4 },
  qrCornerSquare: { position: 'absolute', width: 45, height: 45, borderWidth: 8, borderColor: '#020617', top: 24, left: 24 },
  qrInnerDataPattern: { alignItems: 'center', marginTop: 40 },
  matrixText: { color: '#020617', fontSize: 10, fontWeight: '900', textAlign: 'center', letterSpacing: 0.5 },
  timestampText: { color: '#29B6F6', fontSize: 11, fontWeight: '800', marginTop: 8 },
  statusBadge: { marginTop: 32, backgroundColor: 'rgba(0, 230, 118, 0.1)', borderWidth: 1, borderColor: '#00E676', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  statusText: { color: '#00E676', fontSize: 10, fontWeight: '800', letterSpacing: 0.5 }
});