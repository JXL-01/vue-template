<script setup lang="ts">
definePage({
  name: 'interview',
})

// const numsArr = [1, 2, 3, 4, 6, 7, 8, 10]

// function shotArray(nums: number[]) {
//   const map = new Map()
//   let first: number | undefined
//   nums.forEach((num, index, array) => {
//     if (!first) {
//       first = num
//       map.set(first, first)
//     }
//     if (array[index + 1] - num === 1) {
//       map.set(first, array[index + 1])
//     }
//     else {
//       first = undefined
//     }
//   })
//   const result: string[] = []
//   map.forEach((value, key) => {
//     result.push(`${key}->${value}`)
//   })
//   return result
// }

// console.log(shotArray(numsArr))

// const versions = ['1.0.1', '4.0.1', '2.0.2', '1.2.3', '1.1.4', '2.0.5']

// function sortVersions(versions: string[]) {
//   let result: string[] = []
//   result = versions.sort((a, b) => a > b ? -1 : 1)
//   return result
// }

// console.log(sortVersions(versions))

// const str = 'asdasdas'
// function deleteLetterChar(str: string) {
//   const map = new Map()
//   let letterNum: number = 0
//   for (let i = 0; i < str.length; i++) {
//     if (map.has(str[i])) {
//       map.set(str[i], map.get(str[i]) + 1)
//     }
//     else {
//       map.set(str[i], 1)
//     }
//   }
//   map.forEach((value, _key) => {
//     if (value < letterNum || letterNum === 0) {
//       letterNum = value
//     }
//   })
//   map.forEach((value, key) => {
//     if (value === letterNum) {
//       map.delete(key)
//     }
//   })
//   const result = str.split('').filter(item => map.has(item)).join('')
//   console.log(result)
// }
// deleteLetterChar(str)
</script>

<template>
  <div>
    interview
  </div>
</template>

<style scoped>

</style>

<route lang="yaml">
  meta:
    layout: empty
</route>
