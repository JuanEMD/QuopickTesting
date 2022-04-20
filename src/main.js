import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './assets/index.css'

const i18n = createI18n({
    locale: 'es',
    messages: {
        en: {
            next: 'Next',
            prev: 'Previous',
            selectOneOrFewServices: 'Select one o few services'
        },
        es: {
            next: 'Continuar',
            prev: 'Retroceder',
            selectOneOrFewServices: 'Selecciona uno o varios servicios'
        }
    }
})

const app = createApp(App)

app.use(i18n)
app.mount('#app')
