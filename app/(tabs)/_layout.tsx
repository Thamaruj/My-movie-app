import {View, Text} from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


const _Layout = () =>{
    return(
        <>
            <Tabs
            screenOptions={{
                tabBarShowLabel:true,
                tabBarItemStyle:{
                    width: '100%',
                    height: '50%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }
                ,tabBarStyle:{
                    backgroundColor: '#0f0D23',
                    borderRadius:50,
                    marginHorizontal: 20,
                    marginBottom:50,
                    position: 'absolute',
                    borderColor: '#0f0D23',
                    height: 60,
                    overflow: 'hidden'
                }
            }}
            >
                <Tabs.Screen
                name="index"
                options={{
                    title:"Home",
                    headerShown:false,
                    tabBarIcon: ({color, size}) =>(
                        <Ionicons name="home" color={color} size={size} />
                    )
                }}>
                </Tabs.Screen>

                <Tabs.Screen
                name="profile"
                options={{
                    title:"Profile",
                    headerShown:false,
                    tabBarIcon: ({color, size}) =>(
                        <Ionicons name="person" color={color} size={size} />
                    )
                }}>
                </Tabs.Screen>

                <Tabs.Screen
                name="saved"
                options={{
                    title:"Saved",
                    headerShown:false,
                    tabBarIcon: ({color, size}) =>(
                        <Ionicons name="bookmark" color={color} size={size} />
                    )
                }}>
                </Tabs.Screen>


                <Tabs.Screen
                name="search"
                options={{
                    title:"Search",
                    headerShown:false,
                    tabBarIcon: ({color, size}) =>(
                        <Ionicons name="search" color={color} size={size} />
                    )
                }}>
                </Tabs.Screen>


            </Tabs>
        </>
    )
}

export default _Layout;