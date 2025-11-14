<script setup lang="ts">
definePage({
  name: 'experiment-canvas-study',
})
const canvasRef = useTemplateRef('canvasRef')
const ctx = ref<CanvasRenderingContext2D | null>(null)
onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas)
    return
  ctx.value = canvas.getContext('2d')
  if (!ctx.value)
    return

  const heartPath = new Path2D()
  heartPath.moveTo(300, 300)
  heartPath.bezierCurveTo(100, 175, 235, 35, 300, 125)
  heartPath.bezierCurveTo(365, 35, 500, 175, 300, 300)
  ctx.value.stroke(heartPath)
  ctx.value.fillStyle = 'red'
  ctx.value.fill(heartPath)
})
</script>

<template>
  <div>
    <canvas ref="canvasRef" width="600" height="400" />
  </div>
</template>

<style scoped>

</style>
