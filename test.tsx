import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Platform,
} from 'react-native';
import { Input } from './shared/Input/Input';
import { Colors, Gaps } from './shared/tokens';
import { Button } from './shared/Button/Button';

export default function App() {
  const width = Dimensions.get('window').width;

  const alert = () => {
    Alert.alert('Ошибка', 'Неверный пароль.', [
      {
        text: 'Хорошо',
        onPress: () => {},
        style: 'cancel',
      },
    ]);

    if (Platform.OS === '') {
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.png')}
          resizeMode="contain"
        />
        <View style={styles.form}>
          <Input placeholder="Email" />
          <Input isPassword placeholder="Password" />
          <Button text="Войти" onPress={alert} />
        </View>
        <Text>Восстановить пароль</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 55,
    backgroundColor: Colors.black,
  },
  content: {
    alignItems: 'center',
    gap: Gaps.g50,
  },
  form: {
    alignSelf: 'stretch',
    gap: Gaps.g16,
  },
  input: {
    backgroundColor: '#2e2d3d',
  },
  logo: {
    width: 220,
  },
});

// ===================
// import {
//   Button,
//   Dimensions,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';

// export default function App() {
//   const width = Dimensions.get('window').width;

//   return (
//     <View style={styles.container}>
//       <View style={styles.top}>
//         <Text style={styles.textStyle}>Мое первое приложение!</Text>
//         <Button title="i am button" />
//       </View>
//       <View
//         style={{
//           backgroundColor: 'yellow',
//           alignItems: 'flex-end',
//           height: 500,
//           flexDirection: 'row',
//           flexWrap: 'wrap',
//           gap: 10,
//         }}>
//         <View
//           style={{
//             backgroundColor: 'tomato',
//             width: width / 2 - 5,
//             height: 100,
//           }}>
//           <Text>1</Text>
//         </View>
//         <View
//           style={{
//             backgroundColor: 'purple',
//             width: width / 2 - 5,
//             height: 100,
//           }}>
//           <Text>2</Text>
//         </View>
//         <View
//           style={{
//             backgroundColor: 'green',
//             width: width / 2 - 5,
//             height: 100,
//           }}>
//           <Text>3</Text>
//         </View>
//         <View
//           style={{
//             backgroundColor: 'black',
//             width: width / 2 - 5,
//             height: 100,
//           }}>
//           <Text>4</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 70,
//   },
//   top: {
//     flexDirection: 'row',
//   },
//   textStyle: {
//     color: 'pink',
//     fontSize: 21,
//     borderWidth: 1,
//     borderColor: 'black',
//     padding: 20,
//     marginBottom: 20,
//   },
// });
// ________ //
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.top}>
//         <Text style={styles.textStyle}>Мое первое приложение!</Text>
//         <Button title="i am button" />
//       </View>
//       <View
//         style={{
//           backgroundColor: 'yellow',
//           alignItems: 'flex-end',
//           height: 500,
//           flexDirection: 'row',
//           gap: 10,
//         }}>
//         <View
//           style={{
//             backgroundColor: 'tomato',
//             // flexBasis: 100,
//             width: '40%',
//             flexShrink: 1,
//             flexGrow: 1,
//             height: 100,
//             flexWrap: 'wrap',
//           }}>
//           <Text>1</Text>
//         </View>
//         <View
//           style={{
//             backgroundColor: 'purple',
//             flexBasis: 100,
//             flexGrow: 1,
//             height: 100,
//           }}>
//           <Text>2</Text>
//         </View>
//         <View
//           style={{
//             backgroundColor: 'green',
//             flexBasis: 100,
//             flexGrow: 1,
//             height: 100,
//           }}>
//           <Text>3</Text>
//         </View>
//         <View
//           style={{
//             backgroundColor: 'green',
//             flexBasis: 100,
//             flexGrow: 1,
//             height: 100,
//           }}>
//           <Text>3</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     marginTop: 70,
//   },
//   top: {
//     flexDirection: 'row',
//   },
//   textStyle: {
//     color: 'pink',
//     fontSize: 21,
//     borderWidth: 1,
//     borderColor: 'black',
//     padding: 20,
//     marginBottom: 20,
//   },
// });
// ________ //

// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.top}>
//         <Text style={styles.textStyle}>Мое первое приложение!</Text>
//         <Button title="i am button" />
//       </View>
//       <View
//         style={{
//           backgroundColor: 'yellow',
//           alignItems: 'flex-end',
//           height: 500,
//           // justifyContent: 'space-between',
//           flexDirection: 'row',
//           flexWrap: 'wrap',
//           alignContent: 'center',
//         }}>
//         <View
//           style={{
//             backgroundColor: 'tomato',
//             width: '50%',
//             height: 100,
//           }}></View>
//         <View
//           style={{
//             backgroundColor: 'purple',
//             width: '50%',
//             height: 100,
//             // alignSelf: 'flex-start',
//           }}></View>
//         <View
//           style={{
//             backgroundColor: 'green',
//             width: '50%',
//             height: 100,
//             // alignSelf: 'center',
//           }}></View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     marginTop: 70,
//   },
//   top: {
//     flexDirection: 'row',
//   },
//   textStyle: {
//     color: 'pink',
//     fontSize: 21,
//     borderWidth: 1,
//     borderColor: 'black',
//     padding: 20,
//     marginBottom: 20,
//   },
// });

// _________________  //

// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// // const textStyle = { color: 'red' };

// // const ourStyles = {
// //   textStyle: { color: 'purple' }
// // };

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={{ color: '#faa21a' }}>Привет</Text>
//       </View>
//       <Text style={styles.textStyle}>Мое первое приложение (ну почти)!</Text>
//       <StatusBar style="auto" />
//       <TextInput value="привет " />
//       <Button title="i am button" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textStyle: {
//     color: 'pink',
//     fontSize: 21,
//     borderWidth: 1,
//     borderColor: 'black',
//     padding: 20,
//     marginBottom: 20,
//   },
// });
