// declare module '*.vue' {
//   import { ComponentOptions  } from 'vue'
//   const component: ComponentOptions
//   export default component
// }

declare module '*.md' {
  const str: string
  export default str
}
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}