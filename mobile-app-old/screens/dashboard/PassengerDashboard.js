// mobile-app/screens/dashboard/PassengerDashboard.js
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';

export default function PassengerDashboard() {
  const [newsFeed] = useState([
    { id: '1', title: 'Bree Route Price Adjustment', content: 'Fares to local zones adjusted by R2 starting tomorrow.', type: 'price_increase', priority: 'medium' },
    { id: '2', title: 'Soweto Route Peak Notice', content: 'Heavy loading delay at platform 4 due to highway maintenance.', type: 'general', priority: 'low' }
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.greeting}>Passenger Portal</Text>
          <Text style={styles.subtext}>LIVE MATRIX TRANSIT SESSIONS</Text>
        </View>
        <TouchableOpacity style={styles.actionTab} onPress={() => alert('Opening Location Discovery Matrix...')}>
          <Text style={styles.actionTabText}>FIND RANK</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollArea} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>TRANSIT SYSTEM ANNOUNCEMENTS</Text>
        {newsFeed.map((item) => (
          <View key={item.id} style={styles.announcementCard}>
            <View style={styles.announcementHeader}>
              <Text style={styles.announcementTitle}>{item.title}</Text>
              <View style={[styles.typeBadge, item.type === 'price_increase' && styles.alertTypeBadge]}>
                <Text style={styles.typeText}>{item.type.toUpperCase()}</Text>
              </View>
            </View>
            <Text style={styles.announcementBody}>{item.content}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>ACTIVE DESTINATION FARES</Text>
        <View style={styles.fareTable}>
          <View style={styles.tableRow}>
            <Text style={styles.destinationName}>Johannesburg to Soweto</Text>
            <Text style={styles.farePrice}>R 22.00</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.destinationName}>Johannesburg to Midrand</Text>
            <Text style={styles.farePrice}>R 30.00</Text>
          </View>
          <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
            <Text style={styles.destinationName}>Johannesburg to Sandton</Text>
            <Text style={styles.farePrice}>R 18.00</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderColor: '#1E293B', backgroundColor: '#0F172A' },
  greeting: { fontSize: 18, fontWeight: '900', color: '#FFFFFF' },
  subtext: { fontSize: 10, fontWeight: '800', color: '#29B6F6', marginTop: 2 },
  actionTab: { backgroundColor: '#1E293B', borderWidth: 1, borderColor: '#334155', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 6 },
  actionTabText: { color: '#FFFFFF', fontSize: 11, fontWeight: '700' },
  scrollArea: { padding: 20 },
  sectionTitle: { fontSize: 11, fontWeight: '800', color: '#64748B', letterSpacing: 1, marginBottom: 12, marginTop: 12 },
  announcementCard: { backgroundColor: '#0F172A', borderWidth: 1, borderColor: '#1E293B', borderRadius: 12, padding: 16, marginBottom: 16 },
  announcementHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  announcementTitle: { fontSize: 14, fontWeight: '800', color: '#F8FAFC', flex: 1, marginRight: 8 },
  typeBadge: { backgroundColor: '#334155', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 },
  alertTypeBadge: { backgroundColor: 'rgba(239, 68, 68, 0.1)', borderWidth: 1, borderColor: '#EF4444' },
  typeText: { color: '#F8FAFC', fontSize: 9, fontWeight: '700' },
  announcementBody: { fontSize: 13, color: '#94A3B8', lineHeight: 18 },
  fareTable: { backgroundColor: '#0F172A', borderWidth: 1, borderColor: '#1E293B', borderRadius: 12, paddingHorizontal: 16 },
  tableRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 14, borderBottomWidth: 1, borderColor: '#1E293B' },
  destinationName: { color: '#F8FAFC', fontSize: 14, fontWeight: '600' },
  farePrice: { color: '#00E676', fontSize: 14, fontWeight: '800' }
});