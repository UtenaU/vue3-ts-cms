import { App } from 'vue'
import 'element-plus/dist/index.css'
import { ElButton, ElAlert, ElForm, ElInput, ElRadio } from 'element-plus'

const components = [ElButton, ElAlert, ElForm, ElInput, ElRadio]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
