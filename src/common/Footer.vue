<template>
  <div>
    <div class="top">
      <div class="left">
        <h2 class="title">关于我们</h2>
        <p class="content">亚尔迪创办于2007年，属于外商投资企业，位于厦门软件园三期，主要从事互联网技术研发，从底层的技术研发到互联网产品都有一定的积累。 与厦门大学以及华侨大学保持长期的合作关系。与华侨大学共同设立智能电子商务研发中心，从事大数据处理，人工智能方面的前沿研究工作。技术研发方面处于世界领先水平，长期向欧美企业输出技术。</p>
      </div>
      <div class="center">
        <h2 class="title">相关链接</h2>
        <ul class="content">
          <li><a href="">关于我们</a></li>
          <li><a href="">关于我们</a></li>
          <li><a href="">关于我们</a></li>
          <li><a href="">关于我们</a></li>
        </ul>
      </div>
      <div class="right">
        <h2 class="title">联系我们</h2>
        <div class="content">
          <span>电话&nbsp;&nbsp;&nbsp;</span>
          <span>0592-5550586</span>
        </div>
        <div class="content">
          <span>邮件&nbsp;&nbsp;&nbsp;</span>
          <span>hr@kooboo.com</span>
        </div>
        <div class="content">
          <span>地址&nbsp;&nbsp;&nbsp;</span>
          <span>厦门市集美软件园三期A03栋1401-1402</span>
        </div>
      </div>
    </div>
    <div class="bottom">© 2017 亚尔迪(厦门)科技有限公司</div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
  .top,.bottom
    color: #fff
    line-height: .5rem
  .top
    display: flex
    justify-content: center
    background: $footerBlue
    .left,.center,.right
      margin: 2%
    .left
      width: 30%
    .center
      width: 12%
      a
        padding: .1rem 1.5rem .1rem .1rem
        color: #fff
        border-bottom: 1px solid $underlineBlue
    .right
      width: 15%
    .title
      font-size: .3rem
      margin-bottom: .3rem
  .bottom
    line-height: 1.2rem
    text-align: center
    background: $copyrightBlue
</style>
