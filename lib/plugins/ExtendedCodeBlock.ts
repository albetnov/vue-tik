import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import lowlight from './lowlight'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import Codeblock from './views/Codeblock.vue'

const ExtendedCodeBlock = CodeBlockLowlight.extend({
  onBeforeCreate() {
    this.options.lowlight = lowlight
  },

  addNodeView() {
    return VueNodeViewRenderer(Codeblock)
  }
})

export default ExtendedCodeBlock
