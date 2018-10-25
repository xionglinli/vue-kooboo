<template>
  <div class="container">
    <about-header></about-header>
    <about-picture :pictureData="pictureData"></about-picture>
    <about-detail></about-detail>
    <about-footer></about-footer>
  </div>
</template>

<script>
import AboutHeader from '@/common/Header'
import AboutFooter from '@/common/Footer'
import AboutPicture from '@/common/Picture'
import AboutDetail from './components/Detail'

export default {
  name: 'Home',
  components: {
    AboutHeader,
    AboutFooter,
    AboutPicture,
    AboutDetail
  },
  data () {
    return {
      pictureData: {
        'imgUrl': 'http://www.kooboo.org/uploads/banner/14.jpg',
        'title': '主动做事 低调做人',
        'content': 'BE ACTIVE IN WORK BUT BE MODEST IN LIFE'
      }
    }
  }
}
</script>

<style lang="stylus" scoped></style>
