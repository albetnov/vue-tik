# Vue Tik

A Opinionated Tiptap Vue Wrapper Editor. This project is simply a wrapper for Tiptap with predesigned and preinstalled module
and of course some opinionated customization.

Built on top of [UnoCSS](unocss.dev) and [Headless UI](https://headlessui.com) and of course [Tiptap](tiptap.dev).

# Installation

Install the package from the NPM:

```bash
pnpm i vue-tik
```

# Quick Start

You can install the plugin in your main entry vue files:

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { Editor } from 'vue-tik'
import 'vue-tik/dist/style.css'

createApp(App).use(Editor).mount('#app')
```

After it you can start using it immediately:

```vue
<script setup lang="ts">
import { useEditor } from 'vue-tik'

const { editor } = useEditor()
</script>
<template>
  <vue-tik :config="editor" />
</template>
```

# Configuration

The package supports Global and Local scope configuration.

To define a global scope configuration, simply put the configuration right next to your `use()` statement:

```typescript
createApp(App)
  .use(Editor, {
    image: {
      strategy: 'string'
    }
  })
  .mount('#app')
```

And for local scope configuration, you can put the config in `useEditor` argument:

```typescript
const { editor } = useEditor({
  image: {
    strategy: 'string'
  }
})
```

> Using local configuration will override the entire global configuration.

Here's the full configuration schema:

```typescript
export interface EditorOptions {
  image?: {
    strategy?: 'string' | 'upload'
    url?: string
    requests?: object
    headers?: HeadersInit
    bindId?: boolean
  }
  initialValue?: string
  highlight?: {
    color?: string
  }
}
```

| Key               | Description                                                                        | Value              |
| ----------------- | ---------------------------------------------------------------------------------- | ------------------ |
| `image.strategy`  | Set the strategy of how image being uploaded is handled                            | `string \| upload` |
| `image.url`       | Set the target url of `upload` strategy (required if `image.strategy` is `upload`) | `string`           |
| `image.requests`  | Append the requests payload of the image upload (optional)                         | `object`           |
| `image.headers`   | Append the header payload of the image upload (optional)                           | `object`           |
| `image.bindId`    | Bind the unique id from the image upload to the parsed content (optional)          | `boolean`          |
| `initialValue`    | Set the initial value of the editor.                                               | `string`           |
| `highlight.color` | Set the color of the editor highlight                                              | `string`           |

# Handling Image Uploads

VueTik also provide 2 ways of uploading an image. The easiest `string` method which use `base64` by default.

If that's not satisfies you, VueTik also provide `upload` method which as the name said, it's basically an upload type.

To setup the `upload` all you need to do is:

```typescript
import { useEditor } from 'vue-tik'

const { Editor } = useEditor({
  image: {
    strategy: 'upload',
    url: 'http://localhost:3000/upload'
  }
})
```

And there you. The upload will use `POST` using `form-data`, and this is the response VueTik will expect from your API:

```json
{
  "image": {
    "url": "https://localhost:3000/img/upload.jpg",
    "id": "bf81cb61-3014-4d23-a029-0bd202396f31"
  },

  "error": false
}
```

and of course `2xx` status code. To simplify the upload there's also the server side integration (Coming Soon).

# Twitter Integration

The editor also support twitter embeds. However it's not like full integration yet. I do have a plan for it.

The editor integration requires you to register the peer dependency in order to render the twitter embed:

```html
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

> There's still a limitation for twitter integeration. Currently if you use `getContent` or `getContentJson` the twitter node will only return div with data-twitter-id attribute.

# Rendering VueTik

To render the result of VueTik you can use api from `useEditor`:

- `getContent()` return the `html` content
- `getContentJson()` return the `json` content

Alternatively, you can also use the editor itself [Tiptap Docs](https://tiptap.dev/guide/output#option-1-read-only-instance-of-tiptap). The `useEditor` also exposed the API of the original Tiptap's Editor.

Example:

```typescript
const { editor } = useEditor()

onMounted(() => {
  editor.editor.value?.setEditable(false)
})
```

> Even though you can do above tips, I am still unsure if the menu will also gone? Perhaps I should provide the official API to perform that. Well that's a plan for sure.

The recommended way is of course to use the content from `getContent` or `getContentJson` API and transforms it manually or use Server Side Integration to do it automatically for you (Coming Soon).
