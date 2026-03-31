<script setup>
import Tire from "./Tire.vue";

// 부모(App.vue)한테서 위치(front/rear)와 색상을 받아옵니다.
const props = defineProps({
  location: String, // "front" 또는 "rear"
  color: String     // "PURPLE" 등
});
</script>

<template>
  <div :class="['wheel-frame', `wheel-${props.location}`]">
    <Tire :color="props.color" />
  </div>
</template>

<style scoped>
.wheel-frame {
  position: relative;
  width: 60px;
  height: 60px;
  border: 4px solid #888;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

/* 혹시 앞바퀴와 뒷바퀴의 미세한 차이를 주고 싶을 때 사용 */
.wheel-front { border-color: #666; }
.wheel-rear { border-color: #999; }
</style>