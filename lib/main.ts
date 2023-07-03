import { type App } from 'vue'
import EditorView from './components/Editor.vue'
import { OhVueIcon } from 'oh-vue-icons'
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
  RiParagraph,
  RiHeading,
  RiListOrdered,
  RiListUnordered,
  RiTaskLine,
  RiImageLine,
  RiTableLine,
  RiDivideLine,
  RiYoutubeLine,
  RiTwitterLine,
  RiWindowLine,
  RiCodeLine,
  RiCodeBoxLine,
  RiDoubleQuotesL,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiArrowRightSLine,
  RiMarkPenLine,
  RiLinksLine,
  RiAlignJustify
} from 'oh-vue-icons/icons'
import 'uno.css'
import { EDITOR_CONFIG } from './keys'
import type { EditorOptions } from './types'

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
  RiAlignJustify,
  RiArrowDropDownLine,
  RiParagraph,
  RiHeading,
  RiListOrdered,
  RiListUnordered,
  RiTaskLine,
  RiTableLine,
  RiImageLine,
  RiDivideLine,
  RiYoutubeLine,
  RiTwitterLine,
  RiWindowLine,
  RiCodeLine,
  RiCodeBoxLine,
  RiDoubleQuotesL,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiArrowRightSLine,
  RiMarkPenLine,
  RiLinksLine
)

const Editor = {
  install(app: App, options?: EditorOptions) {
    app
      .component('vue-editor', EditorView)
      .component('v-icon', OhVueIcon)
      .provide(EDITOR_CONFIG, options)
  }
}

export default Editor
