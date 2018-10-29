<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/common/Header'
import AppFooter from '@/common/Footer'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style></style>
