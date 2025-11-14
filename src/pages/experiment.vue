<script setup lang="ts">
const router = useRouter()
definePage({
  name: 'experiment',
})
</script>

<template>
  <Button @click="router.push({ name: 'experiment-js-up' })">
    experiment js up
  </Button>
  <Button @click="router.push({ name: 'experiment-sticky' })">
    experiment sticky
  </Button>
  <Button @click="router.push({ name: 'experiment-canvas-study' })">
    experiment canvas study
  </Button>
</template>

<style scoped>

</style>

<route lang="yaml">
  meta:
    layout: empty
</route>
