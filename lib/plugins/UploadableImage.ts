import Image, { type ImageOptions } from '@tiptap/extension-image'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import UploadableImageView from './views/UploadableImage.vue'

const UploadableImage = Image.extend<ImageOptions & { bindImageId: boolean }, { images: string[] }>(
  {
    name: 'uploadableImage',
    draggable: true,

    addStorage() {
      return {
        images: []
      }
    },

    addOptions() {
      return {
        ...this.parent?.(),
        bindImageId: true
      }
    },

    addCommands() {
      return {
        ...this.parent?.(),
        setImageWithId:
          (id, options) =>
          ({ commands }) => {
            this.storage.images.push(id)
            return commands.insertContent({
              type: this.name,
              attrs: this.options.bindImageId ? { 'data-image-id': id, ...options } : options
            })
          }
      }
    },

    addAttributes() {
      const attrs: {
        [key: string]: object
      } = {
        ...this.parent?.(),
        class: {
          default: 'rounded-lg my-2 max-w-full max-h-full'
        },
        width: {
          default: null
        },
        height: {
          default: null
        }
      }

      if (this.options.bindImageId) {
        attrs['data-image-id'] = {
          default: null
        }
      }

      return attrs
    },

    addNodeView() {
      return VueNodeViewRenderer(UploadableImageView)
    }
  }
)

export default UploadableImage
