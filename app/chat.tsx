import { useRef, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

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
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: 'padding', android: undefined })}>
      <ThemedView style={styles.container}>
        <FlatList
          ref={listRef}
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={[styles.row, item.role === 'user' ? styles.rowEnd : styles.rowStart]}>
              <ThemedView style={[styles.bubble, item.role === 'user' ? styles.userBubble : styles.assistantBubble]}>
                <ThemedText>{item.content}</ThemedText>
              </ThemedView>
            </View>
          )}
        />

        <ThemedView style={styles.inputBar}>
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
});


