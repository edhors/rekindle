import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function MicrogoalScreen() {
  const tint = useThemeColor({}, 'tint');
  const [microgoal, setMicrogoal] = useState('');
  const [microgoals, setMicrogoals] = useState<string[]>([]);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Create a microgoal</ThemedText>
      <ThemedView style={styles.card}>
        <ThemedText style={styles.prompt}>What tiny step will you take?</ThemedText>
        <TextInput
          placeholder="e.g., Sketch for 2 minutes"
          placeholderTextColor={'#6B7280'}
          style={styles.input}
          value={microgoal}
          onChangeText={setMicrogoal}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: tint }]}
          activeOpacity={0.9}
          onPress={() => {
            const value = microgoal.trim();
            if (value.length === 0) return;
            setMicrogoals((prev) => [...prev, value]);
            setMicrogoal('');
          }}
        >
          <ThemedText style={styles.buttonText}>Save</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      <ThemedView style={styles.grid}>
        {microgoals.map((item, index) => (
          <ThemedView key={`${item}-${index}`} style={styles.gridItem}>
            <ThemedText>{item}</ThemedText>
          </ThemedView>
        ))}
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
    fontSize: 28,
    fontWeight: '800',
    color: '#111111',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#E6F0FF',
    shadowColor: '#111111',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderRadius: 12,
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
  prompt: {
    fontSize: 16,
    color: '#111111',
    fontWeight: '700',
  },
  input: {
    width: '100%',
    maxWidth: 420,
    borderWidth: 2,
    borderColor: '#0A7EA4',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
    color: '#111111',
    backgroundColor: '#FFFFFF',
  },
  grid: {
    width: '100%',
    maxWidth: 480,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#E6F0FF',
    borderRadius: 12,
    padding: 12,
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


