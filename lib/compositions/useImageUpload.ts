import type { Editor } from "@tiptap/vue-3"
import { EDITOR_KEY } from "../keys"
import type { EditorOptions } from "../types"
import { inject, type Ref } from "vue"

export default function useImageUpload(options?: EditorOptions['image']) {
const editor = inject<Ref<Editor>>(EDITOR_KEY)

const base64StringHandler = async (file: File) => {
    const buffer = await file.arrayBuffer()
  
    const base64 = btoa(
      new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
    )
    editor?.value
      .chain()
      .focus()
      .setImage({ src: `data:image/png;base64,${base64}` })
      .run()
  }
  
  const urlHandler = async (file: File) => {
    if (!options?.url) return console.error('No url provided for image upload')
  
    const formData = new FormData()
    formData.append('image', file)
  
    if (options.requests) {
      for (const [key, value] of Object.entries(options.requests)) {
        formData.append(key, value)
      }
    }

    try {
      const result = await fetch(options.url, {
        method: 'POST',
        body: formData,
        headers: options?.headers ?? {},
      })
  
      const data = await result.json()

      if (result.status < 200 || result.status >= 300) {
        throw new Error('Expected status code must be in range of 2xx')
      }
  
      if (data.error) {
        throw new Error("Expected error to be 'false'")
      }
  
      if (!data.image || !data.image.url || !data.image.id) {
        throw new Error('Expected image to be a object with:"url=string,id=string"')
      }
  
      editor?.value.chain().focus().setImageWithId(data.image.id, data.image.url).run()
    } catch (err: unknown) {
      console.error(err)
    }
  }
  
  const appendImage = async (e: Event) => {
    const val = e.target as HTMLInputElement
  
    if (!val.files || val.files.length <= 0 || !editor?.value) return
  
    if (options?.strategy !== 'url') {
      return await base64StringHandler(val.files[0])
    }
  
    return await urlHandler(val.files[0])
  }

  return appendImage
}