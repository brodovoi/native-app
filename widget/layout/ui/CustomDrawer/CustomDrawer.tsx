import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Colors } from '../../../../shared/tokens';
import { CustomLink } from '../../../../shared/CustomLink/CustomLink';
import { CloseDrawer } from '../../../../features/layout/ui/CloseDrawer/CloseDrawer.ios';
import { useAtom, useSetAtom } from 'jotai';
import { logoutAtom } from '../../../../entities/auth/model/auth.state';

export function CustomDrawer(props: DrawerContentComponentProps) {
  const logout = useSetAtom(logoutAtom);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.scrollView}>
      <View style={styles.content}>
        <CloseDrawer {...props.navigation} />
      </View>
      <View style={styles.footer}>
        <CustomLink text="Выход" onPress={() => logout()} href={'/login'} />
        <Image
          style={styles.logo}
          source={require('../../../../assets/logo.png')}
          resizeMode="contain"
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  content: {
    flex: 1,
  },
  footer: {
    gap: 50,
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 160,
  },
});
