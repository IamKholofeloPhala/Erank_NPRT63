import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';

export default function LoginScreen({ navigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleSync = () => {
    if (email.toLowerCase().includes('marshal')) {
      navigate('MarshalDashboard');
    } else {
      alert('Profile authenticated. Syncing role workspace node...');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>E-Rank Mobile Sync</Text>
            <Text style={styles.subtitle}>E-RANK FLEET NETWORK CONTROL</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Account Email Address</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g., marshal@bree.co.za"
                placeholderTextColor="#475569"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Access Crypt Key</Text>
              <TextInput
                style={styles.input}
                placeholder="••••••••"
                placeholderTextColor="#475569"
                secureTextEntry
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRoleSync}>
              <Text style={styles.buttonText}>Establish Secure Sync</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.switchAuth} onPress={() => alert('Opening Registration Nodes...')}>
            <Text style={styles.switchAuthText}>
              Need an active matrix profile? Register here
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#020617' 
  },
  scrollContent: { 
    flexGrow: 1, 
    justifyContent: 'center', 
    padding: 24 
  },
  card: { 
    width: '100%', 
    backgroundColor: 'rgba(15, 23, 42, 0.6)', 
    borderRadius: 16, 
    borderWidth: 1, 
    borderColor: '#1E293B', 
    padding: 24 
  },
  header: { 
    alignItems: 'center', 
    marginBottom: 24 
  },
  title: { 
    fontSize: 24, 
    fontWeight: '900', 
    color: '#FFFFFF', 
    letterSpacing: 0.5 
  },
  subtitle: { 
    fontSize: 10, 
    fontWeight: '700', 
    color: '#29B6F6', 
    marginTop: 4, 
    letterSpacing: 1 
  },
  form: { 
    gap: 16 
  },
  inputGroup: { 
    gap: 6 
  },
  label: { 
    fontSize: 10, 
    fontWeight: '700', 
    color: '#94A3B8', 
    textTransform: 'uppercase', 
    letterSpacing: 0.5 
  },
  input: { 
    backgroundColor: '#020617', 
    borderWidth: 1, 
    borderColor: '#1E293B', 
    borderRadius: 8, 
    padding: 14, 
    color: '#F8FAFC', 
    fontSize: 14 
  },
  button: { 
    backgroundColor: '#00E676', 
    borderRadius: 8, 
    padding: 14, 
    alignItems: 'center', 
    marginTop: 8 
  },
  buttonText: { 
    color: '#020617', 
    fontSize: 13, 
    fontWeight: '800', 
    textTransform: 'uppercase', 
    letterSpacing: 0.5 
  },
  switchAuth: { 
    marginTop: 24, 
    alignItems: 'center' 
  },
  switchAuthText: { 
    color: '#29B6F6', 
    fontWeight: '700', 
    fontSize: 12 
  }
});