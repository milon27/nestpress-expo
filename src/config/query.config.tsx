import AsyncStorage from "@react-native-async-storage/async-storage"
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister"
import { QueryClient } from "@tanstack/react-query"
import { PersistQueryClientProvider, removeOldestQuery } from "@tanstack/react-query-persist-client"
import { Platform } from "react-native"

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnReconnect: true, // true
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            retry: 2,
            gcTime: Infinity,
            // gcTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
})

const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
    retry: removeOldestQuery,
})

const localStoragePersister = createAsyncStoragePersister({
    storage: window.localStorage,
    retry: removeOldestQuery,
})

export const QUERY_KEYS = {
    CURRENT_USER: "qk-get-current-user",
}

export const PERSISTED_QUERY_KEYS = [QUERY_KEYS.CURRENT_USER]

export const MyPersistQueryClientProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <PersistQueryClientProvider
            client={queryClient}
            persistOptions={{
                persister: Platform.OS === "web" ? localStoragePersister : asyncStoragePersister,
                dehydrateOptions: {
                    shouldDehydrateQuery: query => {
                        // Check if the query key is in our persistence list
                        return PERSISTED_QUERY_KEYS.some(key =>
                            JSON.stringify(query.queryKey).includes(JSON.stringify(key))
                        )
                    },
                },
            }}>
            {children}
        </PersistQueryClientProvider>
    )
}
