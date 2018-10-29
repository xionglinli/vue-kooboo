<template>
  <div class="detail">
    <ul class="list flex">
      <li
        class="item col-lg-3 col-md-6 col-sm-6 col-xs-12"
        v-for="item of list"
        :key="item.title"
      >
        <div class="img-wrapper">
          <img class="img-item" :src="item.imgUrl">
        </div>
        <div class="content">
          <span class="iconfont">&#xe601;</span>
          <p class="detail">{{item.phone}}</p>
        </div>
        <div class="content">
          <span class="iconfont">&#xe612;</span>
          <p class="detail">{{item.address}}</p>
        </div>
        <div class="content">
          <span
            class="iconfont"
            v-if="item.email"
          >&#xe694;</span>
          <p class="detail">{{item.email}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Address',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .detail
    margin 0 10% 5% 10%
    .list
      margin-left -.5rem
      margin-bottom -1rem
      .item
        box-sizing border-box
        padding 0 0 1rem .5rem
        line-height .5rem
        .img-wrapper
          position relative
          overflow hidden
          width 100%
          height 0
          padding-bottom 60%
          margin-bottom .5rem
          .img-item
            width 100%
        .content
          display flex
          font-size .25rem
          .iconfont
            font-size .4rem
          .detail
            margin-left .2rem
</style>
