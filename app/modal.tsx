import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Background shapes */}
      <ThemedView style={styles.shapeSquare} pointerEvents="none" />
      <ThemedView style={styles.shapeCircle} pointerEvents="none" />
      <ThemedView style={styles.shapeStripe} pointerEvents="none" />
      <ThemedView style={styles.shapeTall} pointerEvents="none" />
      <ThemedView style={styles.shapeSmallCircle} pointerEvents="none" />
      <ThemedView style={styles.shapeDiamond} pointerEvents="none" />
      <ThemedText type="title">This is a modal</ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText type="link">Go to home screen</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FAFAFA',
    position: 'relative',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
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
});
