import { router } from 'expo-router';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function HomeScreen() {
  const tint = useThemeColor({}, 'tint');

  return (
    <ThemedView style={styles.container}>
      {/* Background shapes */}
      <ThemedView style={styles.shapeSquare} pointerEvents="none" />
      <ThemedView style={styles.shapeCircle} pointerEvents="none" />
      <ThemedView style={styles.shapeStripe} pointerEvents="none" />
      <ThemedView style={styles.shapeTall} pointerEvents="none" />
      <ThemedView style={styles.shapeSmallCircle} pointerEvents="none" />
      <ThemedView style={styles.shapeDiamond} pointerEvents="none" />
      <ThemedText type="title" style={styles.appTitle}>Rekindle</ThemedText>
      <ThemedView style={styles.card}>
        <ThemedText style={styles.prompt}>What is your hobby?</ThemedText>
        <TextInput
          placeholder="e.g., Drawing, Gardening, Guitar"
          placeholderTextColor={'#6B7280'}
          style={styles.input}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: tint }]}
          activeOpacity={0.9}
          onPress={() => router.push('/microgoal')}
        >
          <ThemedText style={styles.buttonText}>Start</ThemedText>
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
    position: 'relative',
  },
  shapeSquare: {
    position: 'absolute',
    top: 24,
    left: 24,
    width: 96,
    height: 96,
    backgroundColor: '#FFB3B3',
    shadowColor: '#111111',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  shapeCircle: {
    position: 'absolute',
    bottom: 48,
    right: 24,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#9CCAF0',
    shadowColor: '#111111',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  shapeStripe: {
    position: 'absolute',
    top: 160,
    right: 48,
    width: 160,
    height: 16,
    backgroundColor: '#FFD36B',
    shadowColor: '#111111',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  shapeTall: {
    position: 'absolute',
    top: 80,
    right: 24,
    width: 24,
    height: 200,
    backgroundColor: '#7FD87A',
    shadowColor: '#111111',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  shapeSmallCircle: {
    position: 'absolute',
    bottom: 140,
    left: 40,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#A996FF',
    shadowColor: '#111111',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  shapeDiamond: {
    position: 'absolute',
    top: 300,
    left: 200,
    width: 80,
    height: 80,
    backgroundColor: '#FFB08A',
    transform: [{ rotate: '45deg' }],
    shadowColor: '#111111',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  appTitle: {
    fontSize: 36,
    fontWeight: '800',
    textTransform: 'none',
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
