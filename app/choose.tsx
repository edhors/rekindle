import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function ChooseScreen() {
  const tint = useThemeColor({}, 'tint');
  const { hobby } = useLocalSearchParams<{ hobby: string }>();

  return (
    <ThemedView style={styles.container}>
      {/* Background shapes */}
      <ThemedView style={styles.shapeSquare} pointerEvents="none" />
      <ThemedView style={styles.shapeCircle} pointerEvents="none" />
      <ThemedView style={styles.shapeStripe} pointerEvents="none" />
      <ThemedView style={styles.shapeTall} pointerEvents="none" />
      <ThemedView style={styles.shapeSmallCircle} pointerEvents="none" />
      <ThemedView style={styles.shapeDiamond} pointerEvents="none" />
      <ThemedText type="title" style={styles.hobby}>Hobby: {hobby}</ThemedText>
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
        <TouchableOpacity
          style={[styles.button, { backgroundColor: tint }]}
          activeOpacity={0.9}
          onPress={() => router.push({ pathname: '/helpful-links', params: { hobby } })}
        >
          <ThemedText style={styles.buttonText}>Helpful Links</ThemedText>
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
    bottom: 140,
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
    bottom: 80,
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
  title: {
    backgroundColor: '#E6F0FF',
    color: '#111111',
    fontWeight: '800',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: '#111111',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  hobby: {
    backgroundColor: '#E6F0FF',
    color: '#111111',
    fontWeight: '800',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    
  },
  card: {
    width: '100%',
    maxWidth: 480,
    gap: 12,
    backgroundColor: 'transparent',
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


