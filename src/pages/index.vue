<script setup lang="ts">
const router = useRouter()
const content = ref('')
watch(content, (newVal) => {
  console.log(newVal)
})

const count = ref(1)
const parseOne = computed({
  get: () => count.value + 1,
  set: (val: number) => {
    count.value = val - 1
  },
})
parseOne.value = 1
console.log(count.value)
</script>

<template>
  <div>
    hello world
  </div>
  <Button @click="router.push({ name: 'auth' })">
    click me
  </Button>
  <input v-model="content" type="text" class="border-2 border-gray-300 rounded-md p-2">
  <div>
    {{ content }}
  </div>

  <div>
    <Button @click="router.push({ name: 'experiment' })">
      experiment
    </Button>

    <Button @click="router.push({ name: 'interview' })">
      interview
    </Button>
  </div>
</template>

<style scoped></style>
