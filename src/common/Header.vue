<template>
  <app-response
    :callback="'change'"
    @change="handleResize"
  >
    <div class="header-wrapper">
      <div class="header">
        <img src="http://www.kooboo.org/images/logo.png">
        <div class="iconfont menu-btn"
             v-show="menuBtn"
             @click="handleClick"
        >
          &#xe66d;
        </div>
        <ul :class="{'blockMenu': showBlockMenu,
                     'lineMenu': showLineMenu}"
            v-show="showMenu"
        >
          <li @click="handleClick"
              v-for="item of list"
              :key="item.id">
              <router-link :to='item.to' class="item">
                {{item.text}}
              </router-link>
          </li>
        </ul>
      </div>
    </div>
  </app-response>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      timer: null,
      showMenu: true,
      showLineMenu: true,
      showBlockMenu: false,
      menuBtn: false,
      list: [{
        'id': '001',
        'to': '/',
        'text': '首页'
      }, {
        'id': '002',
        'to': '/about',
        'text': '关于我们'
      }, {
        'id': '003',
        'to': '/project',
        'text': '项目展示'
      }, {
        'id': '004',
        'to': '/join',
        'text': '招聘信息'
      }, {
        'id': '005',
        'to': '/welfare',
        'text': '成长福利'
      }, {
        'id': '006',
        'to': '/contact',
        'text': '联系我们'
      }]
    }
  },
  methods: {
    handleResize (width) {
      this.menuBtn = width < 768
      this.showBlockMenu = width < 768
    },
    handleClick () {
      if (this.showBlockMenu) {
        this.showMenu = !this.showMenu
      }
    }
  },
  watch: {
    showBlockMenu () {
      this.showLineMenu = !this.showBlockMenu
      this.showMenu = this.showLineMenu
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .header-wrapper
    height .96rem
    .header
      position fixed
      z-index 100
      display flex
      justify-content space-between
      left 0
      right 0
      height .56rem
      padding .2rem 10%
      background #fff
      box-shadow 0 0 .05rem #ccc
      .lineMenu
        display flex
        justify-content space-between
        align-items center
        .item
          padding .25rem .2rem
          color #333
          &:hover
            border-bottom .08rem solid $lightBlue
      .menu-btn
        font-size .6rem
        cursor pointer
        &:hover
          color $lightBlue
      .blockMenu
        z-index 100
        position absolute
        top .96rem
        left 0
        right 0
        background rgba(255, 255, 255, .8)
        .item
          display block
          height .24rem
          line-height .24rem
          padding .2rem
          color #333
          &:hover
            color $lightBlue
</style>
