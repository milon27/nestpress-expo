import React from "react"
import { ActivityIndicator, Text, TouchableOpacity } from "react-native"

export default function MyButton({
    title,
    onPress,
    isLoading,
}: {
    title: string
    onPress?: () => void
    isLoading?: boolean
}) {
    return (
        <TouchableOpacity
            className="p-4 bg-blue-500 rounded-lg flex-row justify-center items-center gap-x-2"
            onPress={onPress}
            disabled={isLoading}
        >
            {isLoading && <ActivityIndicator size="small" color="white" />}
            <Text className="text-white text-center">{title}</Text>
        </TouchableOpacity>
    )
}
