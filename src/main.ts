import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import en from './lang/en.json'
import ja from './lang/ja.json'
import zh from './lang/zh.json'

const messages = {
    en,
    zh,
    ja
  }

const i18n = createI18n({
    // something vue-i18n options here ...
    messages,
    locale: 'zh',
    legacy: false,
  })

const app = createApp(App)
app.use(i18n)

app.mount('#app')