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
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#d0d0d0d0',
    padding: 10,
  },
  display: {
    backgroundColor: '#03c672',
    color: 'white',
    fontSize: 32,
    padding: 20
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    margin: 10,
  },
  button_label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
  }
})

