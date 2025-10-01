import { createAuthClient } from "better-auth/react"
import { EnvConfig } from "../config/env.config"

export const authClient = createAuthClient({
    baseURL: EnvConfig.API_URL, // The base URL of your auth server
    fetchOptions: {
        throw: true,
    },
})
