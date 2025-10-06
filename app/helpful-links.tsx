import { useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HelpfulLinksScreen() {
  const { hobby } = useLocalSearchParams();

  return (
    <ThemedView style={styles.container}>
      {/* Background shapes */}
      <ThemedView style={styles.shapeSquare} pointerEvents="none" />
      <ThemedView style={styles.shapeCircle} pointerEvents="none" />
      <ThemedView style={styles.shapeStripe} pointerEvents="none" />
      <ThemedView style={styles.shapeTall} pointerEvents="none" />
      <ThemedView style={styles.shapeSmallCircle} pointerEvents="none" />
      <ThemedView style={styles.shapeDiamond} pointerEvents="none" />
      <ThemedText type="title" style={styles.hobby}>Helpful Links: </ThemedText>
      <ThemedView style={styles.card}>
        <ThemedText style={styles.prompt}>Helpful resources for {hobby}:</ThemedText>
        <ExternalLink href={`https://www.youtube.com/results?search_query=beginner+${hobby}+tutorial`}>
          <ThemedText style={styles.link}>• Watch beginner tutorials on YouTube</ThemedText>
        </ExternalLink>
        <ExternalLink href={`https://www.reddit.com/r/hobbies/search/?q=${hobby}&restrict_sr=1`}>
          <ThemedText style={styles.link}>• Find {hobby} communities on Reddit</ThemedText>
        </ExternalLink>
        <ExternalLink href={`https://www.coursera.org/search?query=${hobby}`}>
          <ThemedText style={styles.link}>• Take an online course</ThemedText>
        </ExternalLink>
        <ExternalLink href={`https://www.meetup.com/find/?keywords=${hobby}`}>
          <ThemedText style={styles.link}>• Join local {hobby} groups</ThemedText>
        </ExternalLink>
      </ThemedView>
      <ThemedView style={styles.card}>
        <ThemedText style={styles.prompt}>Helpful resources for depression:</ThemedText>
        <ExternalLink href={`https://www.youtube.com/results?search_query=depression+therapy`}>
          <ThemedText style={styles.link}>• Watch depression therapy tutorials on YouTube</ThemedText>
        </ExternalLink>
        <ExternalLink href={`https://www.reddit.com/r/depression/search/?q=therapy&restrict_sr=1`}>
          <ThemedText style={styles.link}>• Find depression therapy communities on Reddit</ThemedText>
        </ExternalLink>
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
    gap: 16,
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
    marginBottom: 8,
  },
  link: {
    fontSize: 16,
    color: '#0A7EA4',
    textDecorationLine: 'underline',
    paddingVertical: 4,
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