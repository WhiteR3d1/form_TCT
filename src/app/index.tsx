import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Index() {
  const [count, setCount] = useState(0);

  const dec = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.display}>Count: {count}</Text>
      <TouchableOpacity style={styles.button}
        onPress={() => setCount(count + 1)}>
        <Text style={styles.button_label}> + </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={dec}>
        <Text style={styles.button_label}> - </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={reset}>
        <Text style={styles.button_label}> Reset </Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#F7F7F8',
  },
  display: {
    backgroundColor: '#FFFFFF',
    color: '#111111',
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    padding: 28,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8E8EA',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#111111',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 999,
    marginVertical: 8,
  },
  button_label: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 22,
    textAlign: 'center',
  }
})

