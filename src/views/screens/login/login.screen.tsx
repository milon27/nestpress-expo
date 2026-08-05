import React from "react"
import { Text, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import MyButton from "../../components/my-button"
import { useLoginController } from "./login.controller"

export default function LoginScreen() {
    const { onSubmit, register, errors, isLoading } = useLoginController()
    const { name, onChange, ref } = register("email")
    const { name: passName, onChange: passOnChange, ref: passRef } = register("password")
    return (
        <SafeAreaView className="flex-1 justify-center p-8 gap-y-4 ">
            <Text className="text-2xl font-bold">Login</Text>
            <TextInput
                ref={ref}
                className="border border-gray-300 py-3 px-4 rounded-lg"
                placeholder="Email"
                onChangeText={text => onChange({ target: { name, value: text } })}
            />
            {errors.email && <Text>{errors.email.message}</Text>}
            <TextInput
                className="border border-gray-300 py-3 px-4 rounded-lg"
                placeholder="Password"
                secureTextEntry
                ref={passRef}
                onChangeText={text => passOnChange({ target: { name: passName, value: text } })}
            />
            {errors.password && <Text>{errors.password.message}</Text>}
            <MyButton title="Login" onPress={onSubmit} isLoading={isLoading} />
        </SafeAreaView>
    )
}
