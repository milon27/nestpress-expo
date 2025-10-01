import { Linking, Text, View } from "react-native"
import Button from "../../../views/components/button"

export default function Index() {
    return (
        <View className="flex-1 items-center justify-center bg-white gap-y-2">
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
