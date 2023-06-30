declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    uploadableImage: {
      setImageWithId: (
        id: string,
        options: { src: string; alt?: string; title?: string }
      ) => ReturnType
    }
  }
}

export interface EditorOptions {
  image: {
    strategy: 'string' | 'upload'
    url?: string
    requests?: object
    headers?: HeadersInit
    bindId?: boolean
  }
  initialValue?: string
}
