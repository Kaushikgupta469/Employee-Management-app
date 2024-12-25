import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Entypo, Ionicons,FontAwesome6,FontAwesome5,MaterialCommunityIcons,Octicons} from '@expo/vector-icons';
import { useRouter } from 'expo-router';

//Front-End part of the App
const index = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
        <View style={{ padding: 12 }}>
          <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
            <AntDesign name="areachart" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "900",fontStyle:"italic" }}>Employee Management System</Text>
            <Entypo name="lock" size={24} color="black" />
          </View>
          <View style={{marginTop:20,flexDirection:"row",alignItems:"center",gap:15}}>
            <Pressable
            onPress={()=>router.push('/(home)/employees')} 
            style={{ backgroundColor: "#D3CCE3", padding: 12, borderRadius: 6, alignItems: "center", justifyContent: "center",flex:1}}>
              <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "white", alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="people-sharp" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600" }}>Employee List</Text>
            </Pressable>
            <Pressable style={{ backgroundColor: "#D3CCE3", padding: 12, borderRadius: 6, alignItems: "center", justifyContent: "center",flex:1 }}>
              <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "white", alignItems: 'center', justifyContent: 'center' }}>
              <FontAwesome6 name="book-open-reader" size={24} color="black" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "800" }}>Mark Attendance</Text>
            </Pressable>
          </View>
          <View style={{marginTop:20,backgroundColor:"#FEF9F2",paddingHorizontal:10,paddingVertical:10,borderRadius:10}}>
            <Pressable style={{backgroundColor:"#C5D3E8",borderRadius:6,padding:10,flexDirection:"row",alignItems:"center",marginVertical:10}}>
              <View style={{padding:7,width:45,height:45,borderRadius:7,backgroundColor:"white",alignItems:'center',justifyContent:'center'}}>
              <Ionicons name="newspaper-sharp" size={24} color="black" />
              </View>
              <Text style={{ marginLeft: 10, fontSize:16,fontWeight: "800",flex:1 }}>Attendance Report</Text>
              <View style={{width:35,height:35,borderRadius:7,backgroundColor:"white",alignItems:'center',justifyContent:'center'}}>
              <AntDesign name="right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable style={{backgroundColor:"#C5D3E8",borderRadius:6,padding:10,flexDirection:"row",alignItems:"center",marginVertical:10}}>
              <View style={{padding:7,width:45,height:45,borderRadius:7,backgroundColor:"white",alignItems:'center',justifyContent:'center'}}>
              <MaterialCommunityIcons name="book-open-variant" size={24} color="black" />
              </View>
              <Text style={{ marginLeft: 10, fontSize:16,fontWeight: "800",flex:1 }}>Summary Report</Text>
              <View style={{width:35,height:35,borderRadius:7,backgroundColor:"white",alignItems:'center',justifyContent:'center'}}>
              <AntDesign name="right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable style={{backgroundColor:"#C5D3E8",borderRadius:6,padding:10,flexDirection:"row",alignItems:"center",marginVertical:10}}>
              <View style={{padding:7,width:45,height:45,borderRadius:7,backgroundColor:"white",alignItems:'center',justifyContent:'center'}}>
              <MaterialCommunityIcons name="book-account" size={24} color="black" />
              </View>
              <Text style={{ marginLeft: 10, fontSize:16,fontWeight: "800",flex:1 }}>All Generate Report</Text>
              <View style={{width:35,height:35,borderRadius:7,backgroundColor:"white",alignItems:'center',justifyContent:'center'}}>
              <AntDesign name="right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable style={{backgroundColor:"#C5D3E8",borderRadius:6,padding:10,flexDirection:"row",alignItems:"center",marginVertical:10}}>
              <View style={{padding:7,width:45,height:45,borderRadius:7,backgroundColor:"white",alignItems:'center',justifyContent:'center'}}>
              <FontAwesome6 name="user-clock" size={24} color="black" />
              </View>
              <Text style={{ marginLeft: 10, fontSize:16,fontWeight: "800",flex:1 }}>Overtime Employees</Text>
              <View style={{width:35,height:35,borderRadius:7,backgroundColor:"white",alignItems:'center',justifyContent:'center'}}>
              <AntDesign name="right" size={24} color="black" />
              </View>
            </Pressable>
          </View>
          <View style={{marginTop:20,flexDirection:"row",alignItems:"center",gap:12}}>
            <View style={{backgroundColor:"#EEEEEE",borderRadius:6,padding:12,alignItems:"center",justifyContent:"center",flex:1}}>
              <View style={{width:35,height:35,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
              <Entypo name="v-card" size={24} color="black" />
              </View>
              <Text style={{marginTop:7,fontWeight:"600"}}>Attendance Criteria</Text>
            </View>
            <View style={{backgroundColor:"#C7C8CC",borderRadius:6,padding:12,alignItems:"center",justifyContent:"center",flex:1}}>
              <View style={{width:35,height:35,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
              <FontAwesome5 name="tasks" size={24} color="black" />
              </View>
              <Text style={{marginTop:7,fontWeight:"600"}}>Increased Workflow</Text>
            </View>
          </View>
          <View style={{marginTop:20,flexDirection:"row",alignItems:"center",gap:12}}>
            <View style={{backgroundColor:"#BFD8D5",borderRadius:6,padding:12,alignItems:"center",justifyContent:"center",flex:1}}>
              <View style={{width:35,height:35,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
              <FontAwesome6 name="money-check-dollar" size={24} color="black" />
              </View>
              <Text style={{marginTop:7,fontWeight:"600"}}>Employee's Salary</Text>
            </View>
            <View style={{backgroundColor:"#E5E0FF",borderRadius:6,padding:12,alignItems:"center",justifyContent:"center",flex:1}}>
              <View style={{width:35,height:35,borderRadius:7,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
              <Octicons name="tasklist" size={24} color="black" />
              </View>
              <Text style={{marginTop:7,fontWeight:"600"}}>Task Completed</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})