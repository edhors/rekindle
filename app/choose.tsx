import { router } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function ChooseScreen() {
  const tint = useThemeColor({}, 'tint');

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Choose a section</ThemedText>
      <ThemedView style={styles.card}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: tint }]}
          activeOpacity={0.9}
          onPress={() => router.push('/microgoal')}
        >
          <ThemedText style={styles.buttonText}>Microgoals</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: tint }]}
          activeOpacity={0.9}
          onPress={() => router.push('/chat')}
        >
          <ThemedText style={styles.buttonText}>Chat</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 24,
    padding: 24,
    backgroundColor: '#FAFAFA',
  },
  title: {
    backgroundColor: '#E6F0FF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  card: {
    width: '100%',
    maxWidth: 480,
    gap: 12,
    backgroundColor: '#E6F0FF',
    borderWidth: 0,
    borderColor: 'transparent',
    padding: 16,
    shadowColor: '#111111',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 12,
  },
  button: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#111111',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  secondaryButtonText: {
    color: '#111111',
    fontSize: 16,
    fontWeight: '700',
  },
});


