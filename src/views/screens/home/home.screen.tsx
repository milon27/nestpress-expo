import { queryClient } from "@/src/config/query.config"
import { authClient } from "@/src/lib/auth-client"
import React from "react"
import { Button, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function HomeScreen() {
    const handleLogout = async () => {
        queryClient.clear()
        await authClient.signOut()
    }

    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white gap-y-4">
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
        </SafeAreaView>
    )
}
