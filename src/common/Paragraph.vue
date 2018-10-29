<template>
  <div class="paragraph">
    <p
      v-for="(item,index) of paragraph"
      :key="index"
      :style="style"
    >
      {{item}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
  data () {
    return {
      paragraph: ['the paragraph content'],
      style: {
        fontSize: '.25rem',
        lineHeight: '.5rem',
        textAlign: 'left',
        textIndent: '0',
        padding: '0',
        color: '#333'
      }
    }
  },
  props: {
    paragraphData: {
      text: Array,
      fontSize: String,
      lineHeight: String,
      textAlign: String,
      textIndent: String,
      padding: String,
      color: String
    }
  },
  created () {
    if (this.paragraphData) {
      this.paragraph = this.paragraphData.text || ['the paragraph content']
      this.style = {
        fontSize: this.paragraphData.fontSize || '.25rem',
        lineHeight: this.paragraphData.lineHeight || '.5rem',
        textAlign: this.paragraphData.textAlign || 'left',
        padding: this.paragraphData.padding || '0',
        color: this.paragraphData.color || '#333'
      }
    }
  }
}
</script>

<style lang="stylus" scoped></style>
