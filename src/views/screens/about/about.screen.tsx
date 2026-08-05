import React from "react"
import { Button, Linking, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function AboutScreen() {
    const insets = useSafeAreaInsets()
    return (
        <View
            className="flex-1 items-center justify-center bg-white gap-y-2"
            style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
        >
            <Text className="text-xl font-bold text-blue-500">About Me!</Text>
            <Button
                title="Check milon27.com"
                onPress={() => {
                    Linking.openURL("https://milon27.com")
                }}
            />
        </View>
    )
}
