<template>
  <ul class="technology flex">
    <li
      class="item col-lg-4 col-md-4 col-sm-12 col-xs-12"
      v-for="item of list"
      :key="item.id"
    >
      <div class="img-wrapper">
        <img class="img-item" :src="item.imgUrl">
      </div>
      <h2 class="title">{{item.title}}</h2>
      <p
        class="content"
        v-for="(content,index) of item.content"
        :key="index"
      >{{content}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Technology',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .technology
    justify-content space-around
    margin 5% 10%
    line-height .5rem
    text-align center
    .item
      box-sizing border-box
      padding 0 .2rem
      .img-wrapper
        width 60px
        hegiht 60px
        margin .5rem auto
        .img-item
          width 100%
      .title
        font-size .5rem
        margin-bottom .5rem
      .content
        font-size .22rem
</style>
