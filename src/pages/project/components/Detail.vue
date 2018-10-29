<template>
  <div class="detail">
    <ul class="list flex">
      <li
        class="item col-lg-4 col-md-6 col-sm-12 col-xs-12"
        v-for="item of list"
        :key="item.title"
      >
        <div class="img-wrapper">
          <img class="img-item" :src="item.imgUrl">
        </div>
        <h2 class="title">{{item.title}}</h2>
        <p class="content">{{item.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .detail
    margin 0 10% 10% 10%
    .list
      margin-left -.5rem
      margin-bottom -1rem
      .item
        box-sizing border-box
        padding 0 0 1rem .5rem
        .img-wrapper
          position relative
          overflow hidden
          width 100%
          height 0
          padding-bottom 60%
          .img-item
            width 100%
        .title
          font-size .5rem
          line-height 1rem
</style>
