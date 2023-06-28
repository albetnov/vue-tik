import {lowlight} from "lowlight"

import php from "highlight.js/lib/languages/php"
import js from "highlight.js/lib/languages/javascript"
import ts from "highlight.js/lib/languages/typescript"
import css from "highlight.js/lib/languages/css"
import html from "highlight.js/lib/languages/xml"
import json from "highlight.js/lib/languages/json"

import "highlight.js/styles/github-dark-dimmed.css"

lowlight.registerLanguage("php", php)
lowlight.registerLanguage("js", js)
lowlight.registerLanguage("ts", ts)
lowlight.registerLanguage("css", css)
lowlight.registerLanguage("html", html)
lowlight.registerLanguage("json", json)

export default lowlight