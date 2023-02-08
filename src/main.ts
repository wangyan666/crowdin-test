import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

const messages = {
    en: {
      message: {
        '你好世界': 'hello world'
      }
    },
    zh: {
        message: {
          '你好世界': '你好世界'
        }
    },
    ja: {
        message: {
            '你好世界': 'こんにちは世界'
        }
    }
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