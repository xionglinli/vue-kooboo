<template>
  <about-breadcrumb
    :content="content"
    @change="handleChange"
  ></about-breadcrumb>
</template>

<script>
import AboutBreadcrumb from '@/common/Breadcrumb'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    AboutBreadcrumb
  },
  data () {
    return {
      axiosData: '',
      content: ''
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
    handleChange (id) {
      this.content = this.axiosData[id]
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped></style>
