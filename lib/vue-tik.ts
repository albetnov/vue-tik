import { type App } from 'vue'
import EditorView from './components/Editor.vue'
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
  RiAlignJustify,
  RiCloseCircleLine,
  RiEraserLine,
  RiSaveLine
} from 'oh-vue-icons/icons'
import 'uno.css'
import { EDITOR_CONFIG } from './keys'
import type { EditorOptions } from './types'
import useEditor from './compositions/useEditor'

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
  RiLinksLine,
  RiCloseCircleLine,
  RiEraserLine,
  RiSaveLine
)

const Editor = {
  install(app: App, options?: EditorOptions & { alias?: string }) {
    app.component(options?.alias ?? 'vue-tik', EditorView)

    if (options?.alias) delete options?.alias

    app.provide(EDITOR_CONFIG, options)
  }
}

export { useEditor, Editor }
