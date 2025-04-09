<script setup lang="ts">
const router = useRouter()
function handleClick() {
  router.push('/new')
}
</script>

<template>
  <div>
    hello world
  </div>
  <Button @click="handleClick">
    click me
  </Button>
</template>

<style scoped></style>
