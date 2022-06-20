import { createStore } from 'vuex'

export default createStore({
    state: {
        toasts: [],
        alerts:[]
    },
    mutations: {
        addToast(state, toast) {
            state.toasts.push(toast);
        },
        clearToast(state, title) {
            const index = state.toasts.findIndex((toast) => toast.title === title);
            state.toasts.splice(index, 1);
        },
        addAlert(state, alert) {
            state.alerts.push(alert);
        },
        clearAlert(state, title) {
            const index = state.alerts.findIndex((alert) => alert.title === title);
            state.alerts.splice(index, 1);
        }
    },
    actions: {
    },
    modules: {
    }
})