import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Arith() {
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [z, setZ] = useState("0");

    return (
        <View style={styles.container}>
            <View style={styles.result}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: 'bold',
                }}>Result:</Text>
                <Text style={{ fontSize: 18 }}>{z}</Text>
            </View>
            <View>
                <TextInput style={styles.input}
                    keyboardType='number-pad'
                    value={x}
                    onChangeText={(text) => setX(text)}
                    placeholder="Enter Number" />
                <TextInput style={styles.input}
                    keyboardType='number-pad'
                    value={y}
                    onChangeText={(text) => setY(text)}
                    placeholder="Enter Number" />
            </View>
            <View style={styles.button_pack}>
                <Button title=" ADD " onPress={() => {
                    setZ(String(Number(x) + Number(y)));
                }} />
                <Button title=" SUB " onPress={() => {
                    setZ(String(Number(x) - Number(y)));
                }} />
                <Button title="Reset" onPress={() => {
                    setZ("0");
                    setX("");
                    setY("");
                }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#F5F5F5',
    },
    result: {
        backgroundColor: '#CFC',
        padding: 20,
        borderRadius: 10,
        borderColor: 'black',
        marginVertical: 20,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
    },
    button_pack: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#DDD',
        padding: 20,
        borderRadius: 10,
        borderColor: 'black',
    },
});