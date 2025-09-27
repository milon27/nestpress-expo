import { Text, View } from "react-native";
import Button from "../components/button";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Button />
    </View>
  );
}
