declare module '@tiptap/vue-3' {
    interface Commands<ReturnType> {
        uploadableImage: {
            setImageWithId: (id: string, src: string) => ReturnType,
        }
    }
}

export interface EditorOptions {
    image: {
        strategy: 'base64' | "url",
        url?: string
        requests?: object
        headers?: HeadersInit
    },
    initialValue?: string
}