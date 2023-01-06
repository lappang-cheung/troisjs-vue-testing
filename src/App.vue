<script setup>
import { ref , onMounted } from 'vue'

const renderer = ref(null)
const box = ref(null)

const moveToLeft = () => {
  let posZ = box.value.mesh.position.z
  if (posZ > -5) {
    return box.value.mesh.position.z -= 0.01
  }
}

const moveToBottom = () => {
  let posY = box.value.mesh.position.y
  if (posY > -3) {
    return box.value.mesh.position.y -= 0.02
  }
}

onMounted(() => {
  renderer?.value?.onBeforeRender(() => {
    box.value.mesh.rotation.x += 0.005
    moveToLeft()
    moveToBottom()
  })
})
</script>

<template>
  <div class="w-full h-screen">
    <Renderer resize
              :orbit-ctrl="true"
              ref="renderer">
      <Camera :position="{ x: 20, y:0, z:0 }" />
        <Scene background="#ffffff">
          <PointLight :position="{ y: 50, z: 50 }" />
          <Box ref="box" :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }">
            <MatcapMaterial name="392307_B3AE7D_6D5618_847C42" />
          </Box>
        </Scene>
    </Renderer>
  </div>
</template>