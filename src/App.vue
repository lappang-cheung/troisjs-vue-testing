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
  <div class="p-0 m-0">
    <Renderer width="400"
              orbit-ctrl="true"
              height="400"
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