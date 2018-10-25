<template>
  <div class="breadcrumbs">
    <div class="guide">
      <span class="iconfont home">&#xe608;</span>
      <span> > 关于我们 > </span>
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
export default {
  name: 'Breadcrumb',
  data () {
    return {
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
  props: [
    'content'
  ],
  methods: {
    handleClick (id, index) {
      this.$emit('change', id)
      this.title = this.list[index]['text'].substring(0, 4)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .breadcrumbs
    margin: 5% 15% 5% 20%
    .guide
      margin-bottom: 10%
      .home
        font-size: .4rem
      .title
        color: $breadOrange
        cursor: pointer
        font-weight: bold
    .content
      display: flex
      .left
        width: 30%
        margin-right: 10%
        line-height: .8rem
        .list
          .item
            border-bottom: .02rem solid #f0f0f0
            cursor: pointer
            &:hover
              padding-left: .2rem
              color: $breadOrange
      .right
        flex: 1
        line-height: .5rem
        .title
          line-height: 1rem
          font: bold .3rem
        .subTitle
          text-align: center
          font-size: .2rem
        .para
          .para-title
            line-height: 1rem
            font: bold .25rem
          .para-content
            text-indent: 2em
            font-size: .1rem
</style>
