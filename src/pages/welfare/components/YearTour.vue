<template>
  <div class="year-tour">
    <h2 class="year">{{list.year}}</h2>
    <div class="list flex">
      <div
        class="item-wrapper col-lg-6 col-md-6 col-sm-12 col-xs-12"
        v-for="(item,index) of list['list']"
        :key="index"
      >
        <div class="item">
          <div class="img-wrapper">
            <img class="img-item" :src="item.imgUrl">
          </div>
          <h2 class="title">{{item.title}}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yearTour',
  props: {
    list: Object
  }
}
</script>

<style lang="stylus" scoped>
  .year-tour
    text-align center
    .year
      font-size .4rem
      line-height 1rem
    .list
      position relative
      &:before
        background-color #00aeef
        content ""
        height 100%
        left 50%
        margin-left -.04rem
        position absolute
        top 0
        width .02rem
      // .item-wrappernth-child(2n)
      //   padding-top 2.5rem
      .item-wrapper
        box-sizing border-box
        padding 0 1rem
        margin 1rem 0
        .item
          border .01rem solid #d0d0d0;
          .img-wrapper
            position relative
            overflow hidden
            width 100%
            height 0
            padding-bottom 55%
            .img-item
              width 100%
          .title
            position relative
            padding .5rem 0
            font-size .3rem
            color #00aeef
            background #fff
            text-align left
            text-indent 1em
</style>
