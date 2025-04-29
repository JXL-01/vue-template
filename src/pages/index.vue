<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    hello world
  </div>
  <Button @click="router.push({ name: 'auth' })">
    click me
  </Button>
</template>

<style scoped></style>
