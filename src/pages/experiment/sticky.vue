<script setup lang="ts">
definePage({
  name: 'experiment-sticky',
})
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="h-[200px] bg-gray-50">
      top
    </div>
    <div class="h-[200px] sticky top-0 bg-gray-100">
      nav
    </div>
    <div class="flex-1 min-h-[1280px] bg-gray-200 flex">
      <div class="flex-1">
        content
      </div>
      <div class="w-[300px] sticky top-[200px] self-start">
        sidebar
      </div>
    </div>
    <div class="h-[400px] bg-gray-300">
      footer
    </div>
  </div>
</template>

<style scoped>

</style>
