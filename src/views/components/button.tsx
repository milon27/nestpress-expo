import React from "react"
import { Text, TouchableOpacity } from "react-native"

export default function Button({ title, onPress }: { title: string; onPress?: () => void }) {
    return (
        <TouchableOpacity className="p-4 bg-blue-500 rounded-lg" onPress={onPress}>
            <Text className="text-white">{title}</Text>
        </TouchableOpacity>
    )
}
