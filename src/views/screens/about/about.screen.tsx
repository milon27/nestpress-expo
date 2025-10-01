import React from "react"
import { Button, Linking, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function AboutScreen() {
    return (
        <SafeAreaView>
            <View className="flex-1 items-center justify-center bg-white gap-y-2">
                <Text className="text-xl font-bold text-blue-500">About Me!</Text>
                <Button
                    title="Check milon27.com"
                    onPress={() => {
                        Linking.openURL("https://milon27.com")
                    }}
                />
            </View>
        </SafeAreaView>
    )
}
