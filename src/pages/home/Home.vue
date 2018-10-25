<template>
  <div class="container">
    <home-header></home-header>
    <home-banner :list="bannerList"></home-banner>
    <home-content></home-content>
    <home-banner
      :list="projectList"
      :slides="projectSlides"
      :pBottom="projectBottom"
    ></home-banner>
    <home-technology :list="technologyList"></home-technology>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from '@/common/Header'
import HomeBanner from '@/common/Banner'
import HomeContent from './components/Content'
import HomeTechnology from './components/Technology'
import HomeFooter from '@/common/Footer'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner,
    HomeContent,
    HomeTechnology,
    HomeFooter
  },
  data () {
    return {
      bannerList: [{
        'id': '001',
        'imgUrl': 'http://www.kooboo.org/uploads/slider-index/bar2.jpg'
      }, {
        'id': '002',
        'imgUrl': 'http://www.kooboo.org/uploads/slider-index/board.jpg'
      }, {
        'id': '003',
        'imgUrl': 'http://www.kooboo.org/uploads/slider-index/company-light.jpg'
      }],
      projectList: [{
        'id': '001',
        'imgUrl': 'http://www.kooboo.org/uploads/case/slider/webshop.jpg'
      }, {
        'id': '002',
        'imgUrl': 'http://www.kooboo.org/uploads/case/slider/Vitaminstore1.jpg'
      }, {
        'id': '003',
        'imgUrl': 'http://www.kooboo.org/uploads/case/slider/T-mobile.jpg'
      }, {
        'id': '004',
        'imgUrl': 'http://www.kooboo.org/uploads/case/slider/Pinnacle.jpg'
      }, {
        'id': '005',
        'imgUrl': 'http://www.kooboo.org/uploads/case/slider/Nuon.jpg'
      }, {
        'id': '006',
        'imgUrl': 'http://www.kooboo.org/uploads/case/slider/meetingselect.jpg'
      }, {
        'id': '007',
        'imgUrl': 'http://www.kooboo.org/uploads/case/slider/Gobear.jpg'
      }, {
        'id': '008',
        'imgUrl': 'http://www.kooboo.org/uploads/case/slider/DIDIX.jpg'
      }, {
        'id': '009',
        'imgUrl': 'http://www.kooboo.org/uploads/case/slider/bookchoice.jpg'
      }],
      projectSlides: 3,
      projectBottom: 20,
      technologyList: [{
        'id': '001',
        'imgUrl': 'http://www.kooboo.org/uploads/case/logo/logo-mp.png',
        'title': 'Mail',
        'content': [
          '从底层向上重新定义了邮件。',
          '自主实现邮件通讯中需要用到的所有协议，',
          '从MINE, Quoted Printable，',
          '到SMTP, POP, IMAP。',
          '创新无底线，',
          '可让用户轻松拥有个性化邮箱，',
          '也可把邮件当成做为营销工具。'
        ]
      }, {
        'id': '002',
        'imgUrl': 'http://www.kooboo.org/uploads/case/logo/logo-kooboo.png',
        'title': 'Kooboo CMS',
        'content': [
          '最简单的网站建设方式——',
          '看上哪个网站就用哪个，一键导入任意站点。',
          '最容易的编辑方式——',
          '点击哪里改哪里，页面任何地方，随意修改。',
          '最快的网站系统——',
          '豪秒瞬间响应，超出人类的响应极限。',
          '最快的发布方式——',
          '一键分享与上线。'
        ]
      }, {
        'id': '003',
        'imgUrl': 'http://www.kooboo.org/uploads/case/logo/logo-db.png',
        'title': 'Database',
        'content': [
          '原创的分布式，面对对象数据库。',
          '支持代码对象的直接插入与查询，',
          '支持Linq式查询语法，',
          '支持索引，字段，事件，日记等等。',
          '创新数据库存储，可随意回滚到任意时间点。',
          '最高可达',
          '单线程每秒20万条记录以上的插入速度。'
        ]
      }]
    }
  }
}
</script>

<style lang="stylus" scoped></style>
