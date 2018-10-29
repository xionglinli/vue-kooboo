<template>
  <div id="allmap" class="allmap"></div>
</template>

<script>
import BMap from 'BMap'
export default {
  name: 'Bmap',
  props: {
    list: Object
  },
  methods: {
    ready () {
      let map = new BMap.Map('allmap')
      let point = new BMap.Point(this.list['longitude'], this.list['latitude'])
      map.centerAndZoom(point, 15)
      map.addControl(new BMap.MapTypeControl())
      map.enableScrollWheelZoom(true)
      map.enableDoubleClickZoom(true)
      let marker = new BMap.Marker(point)
      map.addOverlay(marker)
    }
  },
  watch: {
    list () {
      this.ready()
    }
  },
  mounted () {
    this.ready()
  }
}
</script>

<style lang="stylus" scoped>
  html,body,.allmap
    width 100%
    height 8rem
    overflow hidden
</style>
