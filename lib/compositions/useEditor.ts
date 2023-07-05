import { EDITOR_CONFIG } from '../keys'
import type { EditorOptions } from '../types'
import { inject, provide } from 'vue'
import { useEditor as useTiptapEditor } from '@tiptap/vue-3'
import ExtendedImage from '../plugins/ExtendedImage'
import Color from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import Paragraph from '@tiptap/extension-paragraph'
import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Strike from '@tiptap/extension-strike'
import Code from '@tiptap/extension-code'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import ExtendedCodeBlock from '../plugins/ExtendedCodeBlock'
import TextAlign from '@tiptap/extension-text-align'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import BulletList from '@tiptap/extension-bullet-list'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Youtube from '@tiptap/extension-youtube'
import Embed from '../plugins/Embed'
import Twitter from '../plugins/Twitter'
import Link from '@tiptap/extension-link'
import Blockquote from '@tiptap/extension-blockquote'
import HorizontalRule from '@tiptap/extension-horizontal-rule'

export default function useEditor(config?: EditorOptions) {
  if (config) {
    provide(EDITOR_CONFIG, config)
  }

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
      ExtendedImage.configure({
        allowBase64: options?.image.strategy !== 'upload',
        bindImageId: options?.image.bindId ?? true
      }),
      TextStyle,
      Color,
      ExtendedCodeBlock,
      Code.configure({
        HTMLAttributes: {
          class: 'bg-zinc-700 rounded text-sky-300 py-1 px-2'
        }
      }),
      Highlight.configure({
        multicolor: true
      }),
      Typography,
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      ListItem,
      OrderedList,
      BulletList,
      TaskItem,
      TaskList,
      Embed,
      Twitter,
      Youtube,
      Link,
      HorizontalRule,
      Blockquote
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
