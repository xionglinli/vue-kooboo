<template>
  <div class="wrapper"
       ref="wrapper"
       :style="{'top': top}"
  >
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    top: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
    console.log(this.scroll)
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow: hidden
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
</style>
