import { useRef, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useThemeColor } from '@/hooks/use-theme-color';

type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatScreen() {
  const tint = useThemeColor({}, 'tint');
  const insets = useSafeAreaInsets();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'm-1', role: 'assistant', content: 'Hi! How can I help you rekindle a hobby today?' },
  ]);
  const listRef = useRef<FlatList<ChatMessage>>(null);

  const sendMessage = () => {
    const value = input.trim();
    if (!value) return;
    const userMsg: ChatMessage = { id: `u-${Date.now()}` , role: 'user', content: value };
    const botMsg: ChatMessage = { id: `a-${Date.now() + 1}`, role: 'assistant', content: 'Thanks for sharing. Let’s start small—what’s a 2-minute version of that?' };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput('');
    requestAnimationFrame(() => {
      listRef.current?.scrollToEnd({ animated: true });
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
      keyboardVerticalOffset={insets.top + 44}
    >
      <ThemedView style={styles.container}>
        {/* Background shapes */}
        <ThemedView style={styles.shapeSquare} pointerEvents="none" />
        <ThemedView style={styles.shapeCircle} pointerEvents="none" />
        <ThemedView style={styles.shapeStripe} pointerEvents="none" />
        <ThemedView style={styles.shapeTall} pointerEvents="none" />
        <ThemedView style={styles.shapeSmallCircle} pointerEvents="none" />
        <ThemedView style={styles.shapeDiamond} pointerEvents="none" />
        <FlatList
          ref={listRef}
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={[styles.listContent, { paddingBottom: 88 + insets.bottom }]}
          renderItem={({ item }) => (
            <View style={[styles.row, item.role === 'user' ? styles.rowEnd : styles.rowStart]}>
              <ThemedView style={[styles.bubble, item.role === 'user' ? styles.userBubble : styles.assistantBubble]}>
                <ThemedText lightColor="#111111" darkColor="#111111">{item.content}</ThemedText>
              </ThemedView>
            </View>
          )}
        />

        <ThemedView style={[styles.inputBar, { paddingBottom: 12 + insets.bottom }]}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type a message"
            placeholderTextColor={'#6B7280'}
            style={styles.input}
            onSubmitEditing={sendMessage}
            returnKeyType="send"
          />
          <TouchableOpacity style={[styles.sendButton, { backgroundColor: tint }]} activeOpacity={0.9} onPress={sendMessage}>
            <ThemedText style={styles.sendText}>Send</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    position: 'relative',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 88,
    gap: 12,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
  },
  rowStart: {
    justifyContent: 'flex-start',
  },
  rowEnd: {
    justifyContent: 'flex-end',
  },
  bubble: {
    maxWidth: '80%',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
  },
  userBubble: {
    backgroundColor: '#E6F0FF',
  },
  assistantBubble: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  inputBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#0A7EA4',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    color: '#111111',
  },
  sendButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  sendText: {
    color: '#FFFFFF',
    fontWeight: '700',
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


