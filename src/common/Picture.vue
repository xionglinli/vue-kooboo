<template>
  <div class="picture">
    <div class="img-wrapper">
      <img class="img-item" :src="pictureData.imgUrl">
      <div class="shade"></div>
    </div>
    <div class="word">
      <h2 class="title">{{pictureData.title}}</h2>
      <p class="content">{{pictureData.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Picture',
  props: {
    pictureData: Object
  }
}
</script>

<style lang="stylus" scoped>
  .picture
    position: relative
    .img-wrapper
      position: relative
      overflow: hidden
      width: 100%
      height: 0
      padding-bottom: 20%
      .img-item
        width: 100%
      .shade
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        background: rgba(0, 0, 0, .35)
    .word
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      color: #fff
      text-align: center
      line-height: 1rem
      .title
        font-size: .5rem
      .content
        &:before,&:after
          background-color: #fff;
          content: "";
          display: inline-block;
          height: .01rem;
          margin: 0 .16rem;
          vertical-align: middle;
          width: .48rem;
</style>
