import { authClient } from "@/src/lib/auth-client"
import { zodResolver } from "@hookform/resolvers/zod"
import { BetterFetchError } from "better-auth/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Alert } from "react-native"
import { ILoginSchema, LoginSchema } from "./login.schema"

export const useLoginController = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginSchema>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (data: ILoginSchema) => {
        try {
            setIsLoading(true)
            await authClient.signIn.email({
                email: data.email,
                password: data.password,
            })
            Alert.alert("Login successful")
        } catch (error) {
            console.log("onSubmit login: ", JSON.stringify(error, null, 2))
            // todo: learn about better auth error handling
            const { error: fetchError } = error as BetterFetchError
            const message = (fetchError as { message: string; code: string }).message
            Alert.alert(message)
        } finally {
            setIsLoading(false)
        }
    }

    return { register, onSubmit: handleSubmit(onSubmit), errors, isLoading }
}
