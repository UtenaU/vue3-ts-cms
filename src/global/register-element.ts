import { App } from 'vue'
import 'element-plus/dist/index.css'
import {
  ElButton,
  ElAlert,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElLink,
  ElCheckbox
} from 'element-plus'

const components = [
  ElButton,
  ElAlert,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElLink,
  ElCheckbox
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
