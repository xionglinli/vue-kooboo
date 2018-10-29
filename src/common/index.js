import AppResponse from './Response'
import AppImage from './Image'
import AppBanner from './Banner'
import AppTitle from './Title'
import AppParagraph from './Paragraph'
import AppPicture from './Picture'
import AppSelect from './Select'

export default function (Vue) {
  Vue.component('app-response', AppResponse)
  Vue.component('app-image', AppImage)
  Vue.component('app-banner', AppBanner)
  Vue.component('app-title', AppTitle)
  Vue.component('app-paragraph', AppParagraph)
  Vue.component('app-picture', AppPicture)
  Vue.component('app-select', AppSelect)
}
