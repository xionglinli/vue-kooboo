<template>
  <app-response
    :callback="'change'"
    @change="handleChange"
  >
    <div class="picture">
      <app-image :imageData="imageData"/>
      <div
        class="word"
        :style="wordSize"
      >
        <h2 class="title">{{pictureData.title}}</h2>
        <p class="content">{{pictureData.content}}</p>
      </div>
    </div>
  </app-response>
</template>

<script>
export default {
  name: 'Picture',
  data () {
    return {
      imageData: {
        imgUrl: this.pictureData.imgUrl || '',
        pModel: 'width',
        pShade: true,
        pHeight: 320,
        pResponseSize: {
          lg: 320,
          md: 320,
          sm: 280,
          xs: 160
        }
      },
      wordSize: {
        fontSize: '.5rem'
      }
    }
  },
  props: {
    pictureData: {
      imgUrl: String,
      title: String,
      content: String
    }
  },
  methods: {
    handleChange (width) {
      switch (true) {
        case width > 1024 :
          this.wordSize = { fontSize: '.5rem' }
          break
        case width > 480 :
          this.wordSize = { fontSize: '.45rem' }
          break
        default:
          this.wordSize = { fontSize: '.4rem' }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .picture
    position relative
    .word
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 100%
      color #fff
      text-align center
      font-size .5rem
      .title
        line-height 1rem
      .content
        font-size .5em
        &:before,&:after
          background-color #fff;
          content "";
          display inline-block;
          height .01rem;
          margin 0 .16rem;
          vertical-align middle;
          width .48rem;
</style>
