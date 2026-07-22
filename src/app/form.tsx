import { useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown'; // npm i ....
import { RadioButton } from 'react-native-paper'; // npm install ....
import { SafeAreaView } from "react-native-safe-area-context"; // npm i ....

export default function Form() {
    const depts = [
        { label: 'Please Select Department', value: '', index: 0 },
        { label: 'Civil Engineering', value: 'CE', index: 1 },
        { label: 'Computer Education', value: 'CED', index: 2 },
        { label: 'Electrical Engineering', value: 'EE', index: 3 },
        { label: 'Mechanical Engineering', value: 'ME', index: 4 },
    ];
    const [data, setData] = useState({
        name: "",
        gender: '',
        dept: '',
        comment: '',
        isAgree: false,
    })
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: '#F7F7F8' }}>
            <View style={styles.container}>
                <ScrollView style={styles.display}>
                    <Text>Name: {data.name} </Text>
                    <Text>Gender: {data.gender}</Text>
                    <Text>Dept: {data.dept}</Text>
                    <Text>Comment: {data.comment}</Text>
                    <Text>Agree: {data.isAgree ? 'Yes' : 'No'}</Text>
                </ScrollView>
                <View style={{ paddingVertical: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>Name: </Text>
                    <TextInput style={styles.input}
                        value={data.name}
                        onChangeText={(text) => setData({ ...data, name: text })}
                        placeholder='Enter Your Name' />
                </View>
                <RadioButton.Group value={data.gender}
                    onValueChange={value => setData({ ...data, gender: value })}>
                    <Text style={{ fontWeight: 'bold' }}>Gender: </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton value="Male" color="#111111" />
                        <Text>Male</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton value="Female" color="#111111" />
                        <Text>Female</Text>
                    </View>
                </RadioButton.Group>
                <View style={{ paddingVertical: 20 }}>
                    <Text style={{
                        fontWeight: 'bold',
                        paddingBottom: 10,
                    }}>Department: </Text>
                    <Dropdown data={depts}
                        style={styles.dropdown}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder="Select Department"
                        onChange={item => setData({ ...data, dept: item.value })}
                        value={data.dept}
                    />
                </View>
                <View>
                    <Text style={{
                        fontWeight: 'bold',
                        paddingBottom: 10,
                    }}>Comment: </Text>
                    <TextInput style={styles.comment}
                        multiline
                        value={data.comment}
                        onChangeText={(text) => setData({ ...data, comment: text })}
                        placeholder='Enter Your Comment' />
                </View>
                <View style={styles.switch_container}>
                    <Text>Do you agree?</Text>
                    <Switch trackColor={{ true: '#111111', false: '#D1D1D6' }}
                        thumbColor='#FFFFFF'
                        value={data.isAgree}
                        onValueChange={(value) => setData({ ...data, isAgree: value })} />
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 24,
        backgroundColor: '#F7F7F8',
        padding: 5,
    },
    input: {
        height: 52,
        borderColor: '#E8E8EA',
        borderWidth: 1,
        paddingHorizontal: 16,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        color: '#111111',
        marginTop: 8,
    },
    display: {
        height: 120,
        padding: 16,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E8E8EA',
        marginTop: 10,
    },
    comment: {
        height: 80,
        borderColor: '#E8E8EA',
        borderWidth: 1,
        marginBottom: 15,
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        color: '#111111',
        marginTop: 8,
    },
    dropdown: {
        height: 52,
        borderColor: '#E8E8EA',
        borderWidth: 1,
        paddingHorizontal: 16,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
    },
    switch_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
})
