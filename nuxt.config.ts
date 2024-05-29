import type {NuxtConfig} from '@nuxt/types'

const config: NuxtConfig = {
    app: {
        head: {
            title: 'Women Center',
            link: [
                {rel: 'icon', type: 'image/svg', href: '~/public/logo.svg'},
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
            ],
        }
    },
    css: [
        '~/assets/css/global.css',
    ]
}

export default config