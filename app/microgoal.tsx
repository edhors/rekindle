import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function MicrogoalScreen() {
  const tint = useThemeColor({}, 'tint');

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Create a microgoal</ThemedText>
      <ThemedView style={styles.card}>
        <ThemedText style={styles.prompt}>What tiny step will you take?</ThemedText>
        <TextInput
          placeholder="e.g., Sketch for 2 minutes"
          placeholderTextColor={'#6B7280'}
          style={styles.input}
        />
        <TouchableOpacity style={[styles.button, { backgroundColor: tint }]} activeOpacity={0.9}>
          <ThemedText style={styles.buttonText}>Save</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    padding: 24,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111111',
    borderWidth: 2,
    borderColor: '#111111',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    shadowColor: '#111111',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  card: {
    width: '100%',
    maxWidth: 480,
    gap: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#111111',
    padding: 16,
    shadowColor: '#111111',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  prompt: {
    fontSize: 16,
    color: '#111111',
    fontWeight: '700',
  },
  input: {
    width: '100%',
    maxWidth: 420,
    borderWidth: 2,
    borderColor: '#111111',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 4,
    color: '#111111',
    backgroundColor: '#FFFFFF',
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#111111',
    alignSelf: 'flex-start',
    shadowColor: '#111111',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});


