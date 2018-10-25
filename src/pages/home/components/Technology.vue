<template>
  <div>
    <ul class="list">
      <li
        class="item"
        v-for="item of list"
        :key="item.id"
      >
        <div class="img-wrapper">
          <img class="img-item" :src="item.imgUrl">
        </div>
        <h1 class="title">{{item.title}}</h1>
        <p
          class="content"
          v-for="(content,index) of item.content"
          :key="index"
        >{{content}}</p>
      </li>
    </ul>
  </div>
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
  .list
    display: flex
    justify-content: space-around
    margin: 5% 10%
    text-align: center
    line-height: .5rem
    .item
      padding: 0 .2rem
      .img-wrapper
        width: 60px
        hegiht: 60px
        margin: .5rem auto
        .img-item
          width: 100%
      .title
        font-size: .5rem
        margin-bottom: .5rem
</style>
