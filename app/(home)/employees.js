import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Ionicons,AntDesign} from '@expo/vector-icons';
import {  useRouter } from 'expo-router';

const employees = () => {
    const [employees, setEmployees] = useState([]);
    const [input,setInput] = useState("");
    const router = useRouter();
    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const response = await axios.get("http://192.168.56.1:8000/employee");
                setEmployees(response.data);
            } catch (error) {
                console.log("Error fetching the Employee Data", error)
            }
        }
        fetchEmployeeData();

    }, [])
    console.log(employees);
    return (
        <View style={{flex:1,backgroundColor:"white"}}>
            <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'white'}}>
            <Ionicons style={{marginLeft:10}} name="arrow-back" size={24} color="black" />
            <Pressable style={{flexDirection:'row',alignItems:'center',marginHorizontal:7,gap:10,backgroundColor:'white',height:40,borderRadius:4}}>
            <Ionicons name="search-sharp" size={22} color="black" />
            <TextInput value={input} onChangeText={(text) => {setInput(text)}} style={{flex:1}} placeholder='Search'  />

            {employees.length > 0 && (
                <View>
                    <Pressable>
                    <AntDesign name="pluscircle" size={24} color="black" />
                    </Pressable>
                </View>
            )}
            </Pressable>
            </View>

            <Pressable onPress={()=> router.push('/(home)/adddetails')}>
                    <AntDesign name="pluscircle" size={24} color="#0072b1" />
                    </Pressable>
        </View>
    )
}

export default employees

const styles = StyleSheet.create({})