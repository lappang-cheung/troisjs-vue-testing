<script setup>
import { ref , onMounted } from 'vue'

const renderer = ref(null)
const box = ref(null)

onMounted(() => {
  renderer?.value?.onBeforeRender(() => {
    box.value.mesh.rotation.x += 0.01
  })
})
</script>

<template>
  <div class="w-full h-screen">
    <Renderer resize
              orbit-ctrl="true"
              ref="renderer">
      <Camera :position="{ z: 10 }" />
        <Scene background="#ffffff">
          <PointLight :position="{ y: 50, z: 50 }" />
          <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
            <LambertMaterial />
          </Box>
        </Scene>
    </Renderer>
  </div>
</template>