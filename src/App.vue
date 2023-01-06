<script setup>
import { ref , onMounted } from 'vue'

const renderer = ref(null)
const box = ref(null)

const moveToLeft = () => {
  let posZ = box.value.mesh.position.x
  if (posZ > -2.5) {
    return box.value.mesh.position.x -= 0.01
  }
}

const moveToBottom = () => {
  let posY = box.value.mesh.position.y
  if (posY > -3) {
    return box.value.mesh.position.y -= 0.02
  }
}

const onReady = () => {

}

const onProgress = () => {

}

const onError = () => {

}

onMounted(() => {
  // renderer?.value?.onBeforeRender(() => {
  //   // box.value.mesh.rotation.x += 0.005
  //   // moveToLeft()
  //   // moveToBottom()
  // })
})
</script>

<template>
  <div class="w-full h-screen">
    <Renderer ref="renderer" :orbit-ctrl="true" resize antialias>
      <Camera :position="{ z: 10 }" />
      <Scene background="#ffffff">
        <AmbientLight></AmbientLight>
        <GltfModel src="tricks_for_treats/scene.gltf" />
      </Scene>
    </Renderer>
  </div>
</template>