// ~/plugins/vuex-store.js

import Vuex from 'vuex'
import { createApp } from 'vue'

const app = createApp({});
app.use(Vuex);

const store = new Vuex.Store({
    state: {
        breadcrumbs: []
    },
    mutations: {
        clearBreadcrumbs(state) {
            state.breadcrumbs = []
        },
        addBreadcrumb(state, breadcrumb) {
            state.breadcrumbs.push(breadcrumb)
        }
    }
})

export default () => {
    return store;
}
