import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import Editor from '../lib/main'
import { addIcons } from 'oh-vue-icons'
import {
  RiBold,
  RiArrowGoBackFill,
  RiItalic,
  RiStrikethrough,
  RiUnderline,
  RiArrowGoForwardFill,
  RiAlignLeft,
  RiAlignRight,
  RiAlignCenter,
  RiArrowDropDownLine,
  RiParagraph
} from 'oh-vue-icons/icons'

addIcons(
  RiBold,
  RiItalic,
  RiUnderline,
  RiStrikethrough,
  RiArrowGoBackFill,
  RiArrowGoForwardFill,
  RiAlignLeft,
  RiAlignRight,
  RiAlignCenter,
  RiArrowDropDownLine,
  RiParagraph
)

createApp(App).use(Editor).mount('#app')
