import { StyleSheet, Text, View, ScrollView, TextInput, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const adddetails = () => {
    const [name, setName] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [dob, setDob] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [joinigDate, setJoiningDate] = useState("");
    const [salary, setSalary] = useState("");
    const [address, setAdress] = useState("");
    const [designation, setDesignation] = useState("");
    const handleRegister = () => {
        const employeeData = {
            employeeName: name,
            employeeId: employeeId,
            designation: designation,
            phoneNumber: mobileNo,
            dateOfBirth: dob,
            joinigDate: joinigDate,
            activeEmployee: true,
            salary: salary,
            address: address
        };

        axios.post("http://192.168.56.1:8000/addEmployee",employeeData).then((response)=>{
            Alert.alert("Registration Successful","You have been registered successfully");
            setName("");
            setEmployeeId("");
            setDob("");
            setMobileNo("");
            setSalary("");
            setAdress("");
            setJoiningDate("");
            setDesignation("")

        }).catch((error)=>{
            Alert.alert("Registration Failed","An error occured during registration");
            console.log("Registration Failed",error);
        });
    };
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Add a new Employee</Text>

                <TextInput style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} placeholder='Add Employee' placeholderTextColor={'black'} />
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Full Name (First and Last Name )</Text>

                    <TextInput style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} value={name} onChangeText={(text) => setName(text)} placeholder='Enter Your Name' placeholderTextColor={'black'} />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Employee Id</Text>

                    <TextInput style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} value={employeeId} onChangeText={(text) => setEmployeeId(text)} placeholder='Employee Id' placeholderTextColor={'black'} />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Designation</Text>

                    <TextInput style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} value={designation} onChangeText={(text) => setDesignation(text)} placeholder='Designation' placeholderTextColor={'black'} />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Mobile Number</Text>

                    <TextInput style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} value={mobileNo} onChangeText={(text) => setMobileNo(text)} placeholder='Mobile No' placeholderTextColor={'black'} />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Date Of Birth</Text>

                    <TextInput style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} value={dob} onChangeText={(text) => setDob(text)} placeholder='Enter DOB' placeholderTextColor={'black'} />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Joining Date</Text>

                    <TextInput style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} value={joinigDate} onChangeText={(text) => setJoiningDate(text)} placeholder='Joining Date' placeholderTextColor={'black'} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text> Active Employee</Text>
                    <Text>True</Text>
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Salary</Text>

                    <TextInput style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} value={salary} onChangeText={(text) => setSalary(text)} placeholder='Enter Salary' placeholderTextColor={'black'} />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Address</Text>

                    <TextInput style={{ padding: 10, borderColor: '#D0D0D0', borderWidth: 1, marginTop: 10, borderRadius: 5 }} value={address} onChangeText={(text) => setAdress(text)} placeholder=' Enter Address' placeholderTextColor={'black'} />
                </View>

                <Pressable style={{ backgroundColor: '#ABCABA', padding: 10, marginTop: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}
                    onPress={handleRegister}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Add Employee</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default adddetails
