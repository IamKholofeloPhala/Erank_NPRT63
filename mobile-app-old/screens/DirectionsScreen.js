// mobile-app/screens/DirectionsScreen.js
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';

export default function DirectionsScreen({ navigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([
    { id: '1', rankName: 'Bree Street Taxi Rank', city: 'Johannesburg', route: 'Soweto Line 1', lat: -26.201, lng: 28.041, lastDeparture: '17:40' },
    { id: '2', rankName: 'Bree Street Taxi Rank', city: 'Johannesburg', route: 'Midrand Express', lat: -26.201, lng: 28.041, lastDeparture: '17:15' }
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Route Discovery Matrix</Text>
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.inputLabel}>ENTER DESTINATION ZONE</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="e.g., Soweto, Midrand, Bellville..."
          placeholderTextColor="#475569"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollArea} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionHeader}>AVAILABLE OPERATIONAL ROUTE MATCHES</Text>

        {searchResults.map((result) => (
          <View key={result.id} style={styles.resultCard}>
            <View style={styles.cardInfo}>
              <Text style={styles.rankTitle}>{result.rankName}</Text>
              <Text style={styles.routeDetails}>{result.route} ({result.city})</Text>
              
              <View style={styles.coordRow}>
                <Text style={styles.coordText}>LAT: {result.lat}</Text>
                <Text style={styles.coordText}>LNG: {result.lng}</Text>
              </View>
            </View>

            <View style={styles.departureRow}>
              <Text style={styles.depLabel}>LAST DISPATCH TODAY</Text>
              <Text style={styles.depTime}>{result.lastDeparture}</Text>
            </View>

            <TouchableOpacity style={styles.mapBtn} onPress={() => alert('Launching Vector Mapping Directions Grid...')}>
              <Text style={styles.mapBtnText}>VIEW TURN-BY-TURN MAP</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  header: { padding: 20, borderBottomWidth: 1, borderColor: '#1E293B', backgroundColor: '#0F172A', alignItems: 'center' },
  headerTitle: { fontSize: 16, fontWeight: '800', color: '#FFFFFF' },
  searchContainer: { padding: 20, backgroundColor: '#0F172A', borderBottomWidth: 1, borderColor: '#1E293B' },
  inputLabel: { fontSize: 10, fontWeight: '800', color: '#64748B', letterSpacing: 0.5, marginBottom: 8 },
  searchBar: { backgroundColor: '#020617', borderWidth: 1, borderColor: '#1E293B', borderRadius: 8, padding: 12, color: '#F8FAFC', fontSize: 14 },
  scrollArea: { padding: 20 },
  sectionHeader: { fontSize: 11, fontWeight: '800', color: '#64748B', letterSpacing: 1, marginBottom: 14 },
  resultCard: { backgroundColor: '#0F172A', borderWidth: 1, borderColor: '#1E293B', borderRadius: 12, padding: 16, marginBottom: 16 },
  cardInfo: { gap: 4 },
  rankTitle: { fontSize: 16, fontWeight: '800', color: '#FFFFFF' },
  routeDetails: { fontSize: 13, color: '#29B6F6', fontWeight: '600' },
  coordRow: { flexDirection: 'row', gap: 12, marginTop: 4 },
  coordText: { fontSize: 10, color: '#475569', fontWeight: '700' },
  departureRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#020617', padding: 10, borderRadius: 6, marginTop: 14, borderWidth: 1, borderColor: '#1E293B' },
  depLabel: { fontSize: 10, fontWeight: '800', color: '#94A3B8' },
  depTime: { fontSize: 12, fontWeight: '900', color: '#00E676' },
  mapBtn: { backgroundColor: '#29B6F6', borderRadius: 6, padding: 12, alignItems: 'center', marginTop: 12 },
  mapBtnText: { color: '#020617', fontSize: 12, fontWeight: '800' }
});