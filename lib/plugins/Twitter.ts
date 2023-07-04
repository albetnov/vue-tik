import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import TwitterView from './views/TwitterView.vue'

const Twitter = Node.create<{
  HTMLAttributes: Record<string, any>
}>({
  name: 'twitter',
  group: 'block',

  addOptions() {
    return {
      HTMLAttributes: {}
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-twitter-id]'
      }
    ]
  },

  addAttributes() {
    return {
      'data-twitter-id': {
        default: null
      }
    }
  },

  addCommands() {
    return {
      setTwitter:
        (url) =>
        ({ dispatch, tr }) => {
          const node = this.type.create({ 'data-twitter-id': url })

          if (dispatch) {
            tr.replaceRangeWith(tr.selection.from, tr.selection.to, node)
          }

          return true
        }
    }
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },

  addNodeView() {
    return VueNodeViewRenderer(TwitterView)
  }
})

export default Twitter
