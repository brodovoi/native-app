import { TextInput, TextInputProps, StyleSheet } from 'react-native';

export function Input(props: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={'#afb2bf'}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 58,
    backgroundColor: '#2e2d3d',
    paddingHorizontal: 24,
    borderRadius: 10,
    fontSize: 16,
  },
});
