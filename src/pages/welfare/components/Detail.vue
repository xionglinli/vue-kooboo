<template>
  <div class="detail">
    <div class="list">
      <div
        class="item"
        v-for="(item,index) of list"
        :key="index"
      >
        <div
          class="iconfont"
          :style="index===activeIndex&&style||{color:item.color}"
          @mouseover="handleMouseover(index,item.color)"
          @mouseout="handleMouseout(item.color)"
          v-html="item.iconfont"
        ></div>
        <h2 class="title">{{item.title}}</h2>
        <p class="content">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      activeIndex: -1,
      style: {
        'color': '#ccc',
        'background': '#fff'
      }
    }
  },
  props: {
    list: Array
  },
  methods: {
    handleMouseover (index, color) {
      this.activeIndex = index
      this.style = {
        'color': '#fff',
        'background': color
      }
    },
    handleMouseout (color) {
      this.style = {
        'color': color,
        'background': '#fff'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .detail
    margin: 6%
    .list
      display: flex
      flex-wrap: wrap
      justify-content: center
      .item
        flex: 0 0 25%
        box-sizing: border-box
        padding: .5rem
        text-align: center
        line-height: .5rem
        font-size: .25rem
        .iconfont
          margin: 0 auto
          padding: .5rem
          width: 1.2rem
          height: 1.2rem
          line-height: 1.2rem
          font-size: 1.2rem
          border-radius: 50%
          cursor: pointer
        .title
          font: bold .3rem arial
          line-height: 1rem
</style>
