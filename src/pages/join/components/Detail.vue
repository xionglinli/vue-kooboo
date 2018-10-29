<template>
  <div class="detail">
    <div class="title-wrapper">
      <div class="title">职位名称</div>
      <div class="title">职位类型</div>
    </div>

    <div
      class="list"
      v-for="(item,index) of list"
      :key="index"
    >
      <div
        :class="{'item-wrapper':true,active:index===activeIndex && showDetail}"
        @click="handleClick(index)"
      >
        <div class="item">{{item.job}}</div>
        <div class="item">{{item.type}}</div>
      </div>
      <div class="detail" v-show="index===activeIndex && showDetail">
        <h2 class="title">职位职责和要求</h2>
        <p
          class="desc"
          v-for="(request,index) of item.desc"
          :key="index"
        >{{index+1}}.{{request}}</p>
        <p class="other">请在公司授权发布的网站上投递简历；或者将简历随附件发送到指定邮箱：<span class="email">hr@kooboo.com</span>，邮件标题格式为“岗位全称 + 姓名"
接到面试通知后请持相关证件，个人作品（初级以上请务必携带）至公司参加面试</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detial',
  data () {
    return {
      activeIndex: 0,
      showDetail: false
    }
  },
  props: {
    list: Array
  },
  methods: {
    handleClick (index) {
      this.showDetail = index === this.activeIndex ? !this.showDetail : true
      this.activeIndex = index
    }
  },
  watch: {
    list () {
      this.showDetail = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .detail
    margin 1rem 10%
    .item-wrapper,.title-wrapper
      display flex
      width 100%
      margin-bottom .3rem
      .item,.title
        width 50%
        padding .4rem
      .title
        padding .2rem .4rem
    .item-wrapper
      border .02rem solid #f0f0f0
      box-shadow 0 0 10px #f0f0f0
      user-select none
      cursor pointer
      &:hover
        border .02rem solid #c1c1c1
        border-left .06rem solid $selectOrange
    .active
      border .02rem solid #c1c1c1
      border-left .06rem solid $selectOrange
    .detail
      margin .8rem .5rem
      line-height .8rem
      font-size .2rem
      .title
        font bold .25rem arial
        line-height .8rem
      .other
        line-height .5rem
        font-size .25rem
        color $selectOrange
        .email
          display inline-block
          padding 0 .2rem
          border-radius .25rem
          color #fff
          background $selectOrange
</style>
