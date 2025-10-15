import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-cyan-900">
         <Text className="text-5xl text-green-400">Hello World!</Text>
         <Text className="text-2xl text-center mt-4 mb-8 px-4">Welcome to my movie app built with React Native and Expo!</Text>
         <Link href="/movie/id" className="bg-blue-500 px-6 py-3 rounded-full">
           <Text className="text-white text-lg">Movies</Text>
         </Link>

        <Text className="text-primary">Custome color class</Text>
        <Text className="font-bold underline text-light-300">Bold and Underline</Text>
    </View>
    
  );
}
