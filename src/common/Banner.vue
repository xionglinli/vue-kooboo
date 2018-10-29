<template>
  <div class="banner"
       :style="{'padding-bottom': paddingBottom+'%'}"
  >
    <!-- carousel -->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
        v-for="item of list"
        :key="item.id"
      >
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
    </swiper>
    <!-- page turn button -->
    <div class="button-prev iconfont"
         @click="handleSildePrev">&#xe62f;</div>
    <div class="button-next iconfont"
         @click="handleSlideNext">&#xe62e;</div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: this.slides || 1
      },
      paddingBottom: this.pBottom || 43
    }
  },
  props: {
    list: Array,
    slides: Number,
    pBottom: Number
  },
  watch: {
    slides () {
      this.swiperOption.slidesPerView = this.slides
    },
    pBottom () {
      this.paddingBottom = this.pBottom
    }
  },
  methods: {
    handleSildePrev () {
      this.swiper.slidePrev()
    },
    handleSlideNext () {
      this.swiper.slideNext()
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    width 100%
    height 0
    overflow hidden
    cursor pointer
    .swiper-img
      width 100%
    .button-prev,.button-next
      z-index 1
      position absolute
      top 50%
      transform translateY(-50%)
      border-radius 50%
      font-size .5rem
      color #fff
      background rgba(0, 0, 0, .2)
      cursor pointer
      user-select none
      &:hover
        background rgba(0, 0, 0, .3)
    .button-prev
      left .4rem
      padding .1rem .13rem .1rem .07rem
    .button-next
      right .4rem
      padding .1rem .07rem .1rem .13rem
</style>
