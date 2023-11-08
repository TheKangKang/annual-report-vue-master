<template>
  <div></div>
</template>
<script>
// import config from '@/config/config'

export default {
  name: 'CasLogin',
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  data () {
    return {
      redirect: undefined
    }
  },
  created () {
    // let host = config.host
    // if (this.redirect) {
    //   host += '?redirect=' + encodeURIComponent(this.redirect)
    // }
    // window.location.href = local
  }
}
</script>

<style scoped>

</style>
