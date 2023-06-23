import { App } from "vue"
import EditorView from "./components/Editor.vue"

const Editor = {
    install(app: App) {
        app.component("vue-editor", EditorView)
    }
}

export default Editor