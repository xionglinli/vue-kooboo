<template>
  <h2 :style="style">{{title}}</h2>
</template>

<script>
export default {
  name: 'Title',
  data () {
    return {
      title: 'the title content',
      style: {
        fontSize: '.5rem',
        lineHeight: '.5rem',
        textAlign: 'center',
        padding: '0',
        color: '#333'
      }
    }
  },
  props: {
    titleData: {
      text: String,
      fontSize: String,
      lineHeight: String,
      textAlign: String,
      padding: String,
      color: String
    }
  },
  created () {
    if (this.titleData) {
      this.title = this.titleData.text || 'the title content'
      this.style = {
        fontSize: this.titleData.fontSize || '.5rem',
        lineHeight: this.titleData.lineHeight || '.5rem',
        textAlign: this.titleData.textAlign || 'center',
        padding: this.titleData.padding || '0',
        color: this.titleData.color || '#333'
      }
    }
  }
}
</script>

<style lang="stylus" scoped></style>
