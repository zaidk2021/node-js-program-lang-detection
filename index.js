import { createRequire } from "module";
const require = createRequire(import.meta.url);
import {franc} from 'franc';
const langs=require("langs")
const langCode=franc('Alle menslike')
const language=langs.where("3",langCode)
console.log(language.name)
