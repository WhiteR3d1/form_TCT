import { useState } from "react";
import { Modal, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";
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
    const [showPopup, setShowPopup] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: '#F7F7F8' }}>
            <View style={styles.container}>
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
                <TouchableOpacity style={styles.submit_button}
                    onPress={() => setShowPopup(true)}>
                    <Text style={styles.submit_label}>Confirm</Text>
                </TouchableOpacity>
                <Modal visible={showPopup}
                    transparent
                    animationType="fade"
                    onRequestClose={() => setShowPopup(false)}>
                    <View style={styles.popup_overlay}>
                        <View style={styles.popup_card}>
                            <Text style={styles.popup_title}>Your Information</Text>
                            <Text style={styles.popup_text}>Name: {data.name}</Text>
                            <Text style={styles.popup_text}>Gender: {data.gender}</Text>
                            <Text style={styles.popup_text}>Dept: {data.dept}</Text>
                            <Text style={styles.popup_text}>Comment: {data.comment}</Text>
                            <Text style={styles.popup_text}>Agree: {data.isAgree ? 'Yes' : 'No'}</Text>
                            <TouchableOpacity style={styles.popup_button}
                                onPress={() => setShowPopup(false)}>
                                <Text style={styles.submit_label}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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
    submit_button: {
        backgroundColor: '#111111',
        paddingVertical: 14,
        borderRadius: 999,
        marginBottom: 20,
    },
    submit_label: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
    },
    popup_overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        paddingHorizontal: 40,
    },
    popup_card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 24,
    },
    popup_title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111111',
        textAlign: 'center',
        marginBottom: 16,
    },
    popup_text: {
        fontSize: 15,
        color: '#111111',
        marginBottom: 6,
    },
    popup_button: {
        backgroundColor: '#111111',
        paddingVertical: 12,
        borderRadius: 999,
        marginTop: 16,
    },
})
