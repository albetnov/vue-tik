declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    extendedImage: {
      setImageWithId: (
        id: string,
        options: { src: string; alt?: string; title?: string }
      ) => ReturnType
    }
    embed: {
      setIframe: (options: { src: string }) => ReturnType
    }
    twitter: {
      setTwitter: (url: string) => ReturnType
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

declare global {
  interface Window {
    twttr: any
  }
}
