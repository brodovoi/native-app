import { useAtomValue, useSetAtom } from 'jotai';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { logoutAtom } from '../../entities/auth/model/auth.state';
import { useEffect } from 'react';

export default function MyCourses() {
  const logout = useSetAtom(logoutAtom);

  useEffect(() => {
    logout();
  }, []);

  return (
    <View>
      <Text>index</Text>
    </View>
  );
}
