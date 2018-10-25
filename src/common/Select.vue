<template>
  <div class="select">
    <ul class="list">
      <li
        :class="{item,active:index==activeIndex}"
        v-for="(item,index) of list"
        :key="item.id"
        @click="handleClick(index)"
      >{{item.text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Select',
  data () {
    return {
      activeIndex: 0
    }
  },
  props: {
    list: Array
  },
  methods: {
    handleClick (index) {
      this.activeIndex = index
      this.$emit('change', this.list[index]['id'])
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .list
    display: flex
    justify-content: center
    margin: 1rem 0
    .item
      padding: .2rem
      margin: .1rem
      color: #787878
      background: #f0f0f0
      user-select: none
      cursor: pointer
      &:hover
        color: #fff
        background: $selectOrange
    .active
      color: #fff
      background: $selectOrange
</style>
