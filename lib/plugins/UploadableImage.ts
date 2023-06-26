import Image, { type ImageOptions } from "@tiptap/extension-image"

const UploadableImage = Image.extend<ImageOptions, { id: string, images: string[] }>({
    name: 'uploadableImage',
  
    addStorage() {
      return {
        id: '',
        images: []
      }
    },
  
    addCommands() {
      return {
        ...this.parent?.(),
        setImageWithId: (id, src) => {
          this.storage.id = id
          this.storage.images.push(id)

          return ({ commands }) => commands.setImage({ src })
        }
      }
    },
  
    addAttributes() {
      return {
        ...this.parent?.(),
        imageId: {
            default: null,
            parseHTML: element => element.getAttribute('data-image-id'),
            renderHTML: () => ({
              'data-image-id': this.storage.id,
            })
        },
        class: {
            default: 'rounded-lg my-2 max-w-full max-h-full'
        },
      }
    },
  })

export default UploadableImage