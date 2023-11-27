export default function useApi() {
    const rawUrl = useRuntimeConfig().public.apiUrl
    const protocol = 'http'
    const port = 3000
    const baseUrl = `${protocol}://${rawUrl}:${port}`

    const getRepositories = (includeCoinData?: boolean, limit: number = 10) => {
        const url = `${baseUrl}/get-repositories`

        const { data } = useFetch(url, {
            query: {
                includeCoinData,
                limit
            }
        })

        return data
    }

    return {
        getRepositories
    }
}