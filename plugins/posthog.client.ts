/* eslint-disable camelcase */
import { defineNuxtPlugin } from '#app'

import posthog from 'posthog-js'

export default defineNuxtPlugin(() => {
    const posthogClient = posthog.init('phc_HG0wqu2aCSVwRkOMIFC2QJti9a8j0iI8IgBUl3a5qZV', {
        api_host: 'https://app.posthog.com',
        loaded: (posthog) => {
            if(import.meta.env.MODE === 'development') posthog.debug()
        }
    })

    const router = useRouter()

    router.afterEach((to) => {
        posthog.capture('$pageview', {
            current_url: to.fullPath
        })
    })

    return {
        provide: {
            posthogClient
        }
    }
})