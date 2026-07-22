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
                    fontSize: 15,
                    fontWeight: '600',
                    color: '#8A8A8E',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                }}>Result</Text>
                <Text style={{
                    fontSize: 32,
                    fontWeight: '600',
                    color: '#111111',
                    textAlign: 'center',
                    marginTop: 6,
                }}>{z}</Text>
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
                <Button title=" ADD " color="#111111" onPress={() => {
                    setZ(String(Number(x) + Number(y)));
                }} />
                <Button title=" SUB " color="#111111" onPress={() => {
                    setZ(String(Number(x) - Number(y)));
                }} />
                <Button title=" MUL " color="#111111" onPress={() => {
                    setZ(String(Number(x) * Number(y)));
                }} />
                <Button title=" DIV " color="#111111" onPress={() => {
                    if (Number(y) === 0) {
                        setZ("Error: Division by zero");
                    } else {
                        setZ(String(Number(x) / Number(y)));
                    }
                }} />
                <Button title="Reset" color="#8A8A8E" onPress={() => {
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
        paddingHorizontal: 24,
        backgroundColor: '#F7F7F8',
    },
    result: {
        backgroundColor: '#FFFFFF',
        padding: 24,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E8E8EA',
        marginVertical: 20,
    },
    input: {
        height: 52,
        borderColor: '#E8E8EA',
        borderWidth: 1,
        marginBottom: 14,
        paddingHorizontal: 16,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        color: '#111111',
    },
    button_pack: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E8E8EA',
        marginTop: 8,
    },
});