<template>
  <div class="about-detail">
    <div class="guide">
      <router-link class="router" :to="'/'">
        <span class="iconfont home">&#xe608; > </span>
      </router-link>
      <router-link class="router" :to="$route.path">
        <span>关于我们 > </span>
      </router-link>
      <span class="title">{{title}}</span>
    </div>
    <div class="content">
      <div class="left">
        <ul class="list">
          <li
            class="item"
            v-for="(item,index) of list"
            :key="item.id"
            @click="handleClick(item.id,index)"
          >{{item.text}}</li>
        </ul>
      </div>
      <div class="right">
        <h1 class="title">{{content.title}}</h1>
        <h2 class="subTitle"
            v-for="(item,index) of content.subTitle"
            :key="'sub-'+index"
            v-if="content.subTitle"
        >{{item}}</h2>
        <div class="para"
             v-for="(item,index) of content.para"
             :key="index"
        >
          <h3 class="para-title"
              v-if="item.title"
          >{{item.title}}</h3>
          <p class="para-content">{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      axiosData: '',
      content: '',
      title: '企业文化',
      list: [{
        'id': 'info',
        'text': '公司简介 | INFO'
      }, {
        'id': 'tech',
        'text': '技术创新 | TECH'
      }, {
        'id': 'culture',
        'text': '企业文化 | CULTURE'
      }]
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json')
        .then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.axiosData = res.data
        this.content = res.data.culture
      }
    },
    handleClick (id, index) {
      this.title = this.list[index]['text'].substring(0, 4)
      this.content = this.axiosData[id]
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .about-detail
    margin 5% auto
    .guide
      .router
        color #333
      margin-bottom 1rem
      margin-left 7.5%
      .home
        font-size .4rem
      .title
        color $breadOrange
        cursor pointer
        font-weight bold
    .content
      display flex
      justify-content center
      .left
        width 20%
        margin-right 5%
        .list
          .item
            padding .3rem 0
            border-bottom .02rem solid #f0f0f0
            font-size .25rem
            cursor pointer
            &:hover
              padding-left .2rem
              color $breadOrange
      .right
        width 60%
        line-height .5rem
        .title
          line-height 1rem
          font bold .3rem
        .subTitle
          text-align center
          font-size .2rem
        .para
          .para-title
            line-height 1rem
            font bold .25rem
          .para-content
            text-indent 2em
            font-size .1rem
</style>
