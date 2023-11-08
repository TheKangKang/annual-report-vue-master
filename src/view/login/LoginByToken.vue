<template>
  <div></div>
</template>
<script>
import { getQueryObject } from '@/utils'

export default {
  name: 'LoginByToken',
  created () {
    const query = getQueryObject(window.location.href)
    const token = query['token']
    const redirect = decodeURIComponent(query['redirect'])
    if (token) {
      this.$store.dispatch('LoginByToken', token).then(() => {
        this.$router.push({ path: redirect || '/' })
      })
    }
  }
}
</script>

<style scoped>

</style>
