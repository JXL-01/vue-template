<script setup lang="ts">
definePage({
  name: 'experiment-js-up',
})
const route = useRoute()
console.log(route.query)
const searchParams = new URLSearchParams(route.fullPath.split('?')[1])
console.log(searchParams.get('aaa'))
console.log(searchParams.get('bbb'))
</script>

<template>
  <div class="w-full h-scree">
    从输入URL到页面展示的过程中发生了什么
    <ul>
      <li>
        url解析
      </li>
      <li>
        DNS解析
      </li>
      <li>
        TCP连接
      </li>
      <li>
        Http连接
      </li>
      <li>
        向服务器请求拿到数据
      </li>
      <li>
        拿到数据页面进行渲染
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
