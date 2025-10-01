import axios from "axios"
import { EnvConfig } from "../config/env.config"

export const ApiService = axios.create({
    baseURL: EnvConfig.API_URL,
    withCredentials: true,
    timeout: 1000,
})
