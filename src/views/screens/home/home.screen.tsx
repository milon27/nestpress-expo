import { queryClient } from "@/src/config/query.config"
import { authClient } from "@/src/lib/auth-client"
import React from "react"
import { Button, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function HomeScreen() {
    const insets = useSafeAreaInsets()
    const handleLogout = async () => {
        queryClient.clear()
        await authClient.signOut()
    }

    return (
        <View
            className="flex-1 items-center justify-center bg-white gap-y-4"
            style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
        >
            <Text className="text-xl font-bold text-blue-500">Welcome to Nestpress app!</Text>
            <Text className="text-xl font-bold text-blue-500">Welcome to Nestpress app!</Text>
            <Text className="text-xl font-bold text-blue-500">Welcome to Nestpress app!</Text>
            <Text className="text-xl font-bold text-blue-500">Welcome to Nestpress app!</Text>
            <Text className="text-xl font-bold text-blue-500">Welcome to Nestpress app!</Text>
            <Text className="text-xl font-bold text-blue-500">Welcome to Nestpress app!</Text>
            <Text className="text-xl font-bold text-blue-500">Welcome to Nestpress app!</Text>
            <Text className="text-xl font-bold text-blue-500">Welcome to Nestpress app!</Text>
            <Text className="text-xl font-bold text-blue-500">Welcome to Nestpress app!</Text>
            <Button
                title="Logout"
                onPress={() => {
                    handleLogout()
                }}
            />
        </View>
    )
}
