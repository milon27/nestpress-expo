import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <View className="flex-1 items-center justify-center bg-white gap-y-2">
                <Text className="text-xl font-bold text-blue-500">Welcome to Nestpress app!</Text>
            </View>
        </SafeAreaView>
    )
}
