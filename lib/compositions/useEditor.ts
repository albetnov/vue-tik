import { EDITOR_CONFIG } from '../keys'
import type { EditorOptions } from '../types'
import { inject } from 'vue'
import { useEditor as useTiptapEditor } from '@tiptap/vue-3'
import UploadableImage from '../plugins/UploadableImage'
import Color from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import lowlight from '../plugins/lowlight'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import Paragraph from '@tiptap/extension-paragraph'
import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Strike from '@tiptap/extension-strike'
import Code from '@tiptap/extension-code'
import Highlight from '@tiptap/extension-highlight'

export default function useEditor(config?: EditorOptions) {
  const options = config ? config : inject<EditorOptions>(EDITOR_CONFIG)

  const editor = useTiptapEditor({
    content: options?.initialValue ?? '<p>Vue Editor!</p>',
    extensions: [
      Document,
      Text,
      Paragraph,
      Heading,
      Bold,
      Italic,
      Underline,
      Strike,
      UploadableImage.configure({
        allowBase64: options?.image.strategy !== 'upload',
        bindImageId: options?.image.bindId ?? true
      }),
      TextStyle,
      Color,
      CodeBlockLowlight.configure({ lowlight }),
      Code,
      Highlight
    ]
  })

  return {
    editor: {
      options,
      editor
    },
    getContent: () => editor.value?.getHTML(),
    getContentJson: () => editor.value?.getJSON()
  }
}
