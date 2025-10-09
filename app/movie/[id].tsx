import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Details = () =>{

    const {id} = useLocalSearchParams();

    return(
        <View className="flex-1 justify-center items-center">
            <Text>Movie Details: {id}</Text>
        </View>
    )
}

export default Details
const styles = StyleSheet.create({})