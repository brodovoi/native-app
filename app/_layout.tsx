import { Slot, Stack, Tabs } from 'expo-router';
import { Colors } from '../shared/tokens';
import { Text } from 'react-native';

export default function RootRayout() {
  return (
    <Stack
      screenOptions={{
        statusBarColor: Colors.black,
        contentStyle: {
          backgroundColor: Colors.black,
        },
        headerShown: false,
      }}>
      <Stack.Screen name="login" />
      <Stack.Screen
        name="restore"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
}
