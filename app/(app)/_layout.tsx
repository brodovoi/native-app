import { Redirect } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useAtomValue } from 'jotai';
import { authAtom } from '../../entities/auth/model/auth.state';
import { Colors, Fonts } from '../../shared/tokens';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { MenuButton } from '../../features/layout/ui/MenuButton/MenuButton';
import { CustomDrawer } from '../../widget/layout/ui/CustomDrawer/CustomDrawer';

export default function AppRayout() {
  // const { access_token } = useAtomValue(authAtom);
  // if (!access_token) {
  //   return <Redirect href="/login" />;
  // }

  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <Drawer
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: Colors.black,
            shadowColor: Colors.black,
            shadowOpacity: 0,
          },
          headerLeft: () => {
            return <MenuButton navigation={navigation} />;
          },
          headerTitleStyle: {
            color: Colors.white,
            fontFamily: Fonts.regular,
            fontSize: Fonts.f20,
          },
          headerTitleAlign: 'center',
          sceneContainerStyle: {
            backgroundColor: Colors.black,
          },
        })}>
        <Drawer.Screen name="index" />
      </Drawer>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
