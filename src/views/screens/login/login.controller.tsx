import { authClient } from "@/src/lib/auth-client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Alert } from "react-native"
import { ILoginSchema, LoginSchema } from "./login.schema"

export const useLoginController = () => {
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
            await authClient.signIn.email({
                email: data.email,
                password: data.password,
            })
            Alert.alert("Login successful")
        } catch (error) {
            console.log("onSubmit login: ", error)
            Alert.alert((error as Error).message)
        }
    }

    return { register, onSubmit: handleSubmit(onSubmit), errors }
}
