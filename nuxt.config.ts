import type {NuxtConfig} from '@nuxt/types'

export default defineNuxtConfig({
    app: {
        head: {
            title: 'Women Center',
            link: [
                {rel: 'icon', type: 'HYP/svg', href: '~/public/logo.svg'},
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
            ],
        }
    },
    css: [
        '~/assets/css/global.css',
    ],
    ssr: true,
    // modules: [
    //     '@prisma/nuxt'
    // ]
});