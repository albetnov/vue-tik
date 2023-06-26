import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import Editor from '../lib/main'


createApp(App).use(Editor, {
  image: {
    strategy: "url",
    url: "http://localhost:3000/upload",
  }
}).mount('#app')
