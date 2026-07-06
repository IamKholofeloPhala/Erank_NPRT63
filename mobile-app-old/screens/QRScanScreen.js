// mobile-app/screens/QRScanScreen.js
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';

export default function QRScanScreen({ navigate }) {
  const [hasPermission, setHasPermission] = useState(true);

  const handleMockScan = () => {
    alert('QR Code detected! Syncing with E-Rank gateway routing matrix...');
    if (navigate) navigate('PassengerDashboard');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Camera Check-In Scanner</Text>
      </View>

      <View style={styles.scannerWrapper}>
        <Text style={styles.instruction}>Align the E-Rank station QR code within the target bounds</Text>
        
        {/* Simulation graphic for camera view scanner overlay */}
        <View style={styles.cameraBoxSimulation}>
          <View style={[styles.cornerGuide, styles.topLeft]} />
          <View style={[styles.cornerGuide, styles.topRight]} />
          <View style={[styles.cornerGuide, styles.bottomLeft]} />
          <View style={[styles.cornerGuide, styles.bottomRight]} />
          
          <TouchableOpacity style={styles.scanActionArea} onPress={handleMockScan}>
            <Text style={styles.scanBtnText}>TAP TO SIMULATE SCAN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoAlert}>
          <Text style={styles.infoText}>Ensure you have an active network internet session.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  header: { padding: 20, borderBottomWidth: 1, borderColor: '#1E293B', backgroundColor: '#0F172A', alignItems: 'center' },
  headerTitle: { fontSize: 16, fontWeight: '800', color: '#FFFFFF' },
  scannerWrapper: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  instruction: { fontSize: 13, color: '#94A3B8', textAlign: 'center', marginBottom: 40 },
  cameraBoxSimulation: { width: 280, height: 280, backgroundColor: 'rgba(15, 23, 42, 0.8)', borderWidth: 1, borderColor: '#334155', borderRadius: 24, position: 'relative', justifyContent: 'center', alignItems: 'center' },
  cornerGuide: { position: 'absolute', width: 30, height: 30, borderColor: '#00E676' },
  topLeft: { top: 20, left: 20, borderTopWidth: 4, borderLeftWidth: 4 },
  topRight: { top: 20, right: 20, borderTopWidth: 4, borderRightWidth: 4 },
  bottomLeft: { bottom: 20, left: 20, borderBottomWidth: 4, borderLeftWidth: 4 },
  bottomRight: { bottom: 20, right: 20, borderBottomWidth: 4, borderRightWidth: 4 },
  scanActionArea: { backgroundColor: 'rgba(0, 230, 118, 0.1)', borderWidth: 1, borderColor: '#00E676', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8 },
  scanBtnText: { color: '#00E676', fontSize: 11, fontWeight: '800', letterSpacing: 0.5 },
  infoAlert: { marginTop: 40, backgroundColor: '#0F172A', padding: 14, borderRadius: 8, borderWidth: 1, borderColor: '#1E293B' },
  infoText: { color: '#64748B', fontSize: 12, textAlign: 'center' }
});