import { Stack } from "expo-router"
import { ActivityIndicator } from "react-native"
import "../global.css"
import { useUser } from "../hooks/user.hook"

export default function RootLayout() {
    const { user, loading } = useUser()

    if (loading) {
        return <ActivityIndicator size="large" className="flex-1 justify-center items-center" />
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Protected guard={!Boolean(user)}>
                <Stack.Screen name="(public)/login" options={{ headerShown: false }} />
            </Stack.Protected>
            <Stack.Protected guard={Boolean(user)}>
                <Stack.Screen name="(protected)/(tabs)" options={{ headerShown: false }} />
            </Stack.Protected>
        </Stack>
    )
}
