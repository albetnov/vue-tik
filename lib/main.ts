import {type App } from "vue"
import EditorView from "./components/Editor.vue"
import { OhVueIcon } from "oh-vue-icons"

const Editor = {
    install(app: App) {
        app.component("vue-editor", EditorView)
        .component("v-icon", OhVueIcon)
    }
}

export default Editor