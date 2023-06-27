import { EDITOR_CONFIG } from "../keys";
import type { EditorOptions } from "../types";
import { inject } from "vue";
import { useEditor as useTiptapEditor } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import UploadableImage from "../plugins/UploadableImage";

export default function useEditor(config?: EditorOptions) {
    const options = config ? config :inject<EditorOptions>(EDITOR_CONFIG) 

    const editor = useTiptapEditor({
        content: options?.initialValue ?? '<p>Vue Editor!</p>',
        extensions: [
            StarterKit,
            UploadableImage.configure({
                allowBase64: options?.image.strategy !== "url",
            })
        ]
    })

    return {
        editor: {
            options,
            editor
        },
        getContent: () => editor.value?.getHTML(),
    }
}