<template>
  <app-response
    :callback="'change'"
    @change="handleChange"
  >
    <div :class="['image',model,{shade:isShade}]">
      <div class="img-wrapper" :style="style">
        <img class="img-item" :src="imgUrl" :style="itemStyle" ref="img">
      </div>
    </div>
  </app-response>
</template>

<script>
export default {
  name: 'Picture',
  data () {
    return {
      model: (this.imageData && this.imageData.pModel) || 'height',
      isShade: (this.imageData && this.imageData.pShade) || false,
      imgUrl: (this.imageData && this.imageData.imgUrl) || '',
      style: {},
      itemStyle: {},
      responseSize: {}
    }
  },
  props: {
    imageData: {
      imgUrl: String,
      pModel: String,
      pShade: Boolean,
      pBottom: Number,
      pHeight: Number,
      pResponseSize: Object
    }
  },
  methods: {
    handleChange (width) {
      let func
      let img = new Image()
      img.src = this.$refs.img.src
      img.onload = () => {
        let ratio = img.height / img.width
        let ratioHeight = ratio * width
        switch (this.model) {
          case 'height':
            func = this.setPaddingBottom
            break
          case 'width':
            func = this.setHeight
            this.itemStyle = this.height > ratioHeight ? {'width': 'auto', 'height': '100%'} : {'width': '100%', 'height': ratio < 1 ? 'auto' : '100%'}
        }
        switch (true) {
          case width > 1024 :
            func(this.responseSize['lg'])
            break
          case width > 768 :
            func(this.responseSize['md'])
            break
          case width > 480 :
            func(this.responseSize['sm'])
            break
          default:
            func(this.responseSize['xs'])
        }
      }
    },
    setPaddingBottom (value) {
      this.style['paddingBottom'] = value + '%'
    },
    setHeight (value) {
      this.style['height'] = value + 'px'
    }
  },
  created () {
    switch (this.model) {
      case 'height':
        this.bottom = (this.imageData && this.imageData.pBottom) || 40
        this.style = { paddingBottom: this.bottom + '%', height: 0 }
        this.responseSize = (this.imageData && this.imageData.pResponseSize) || { 'lg': this.bottom, 'md': this.bottom, 'sm': this.bottom, 'xs': this.bottom }
        break
      case 'width':
        this.height = (this.imageData && this.imageData.pHeight) || 200
        this.style = { height: this.height + 'px' }
        this.responseSize = (this.imageData && this.imageData.pResponseSize) || { 'lg': this.height, 'md': this.height, 'sm': this.height, 'xs': this.height }
        break
    }
  }
}
</script>

<style lang="stylus" scoped>
  .image
    .img-wrapper
      overflow hidden
      width 100%
      .img-item
        width 100%
  .width
    .img-wrapper
      position relative
      .img-item
        position absolute
        top 50%
        transform translateY(-50%)
  .shade
    position relative
    &:after
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      content ""
      background rgba(0, 0, 0, .3)
</style>
