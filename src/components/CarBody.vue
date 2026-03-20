<script setup>
const props = defineProps({
  bodyColor:{
    type : String,
    default : '#333' //기본값 : 검정
  }
});
</script>

<template>
  <div class="car-body" :style="{backgroundColor : props.bodyColor}" >
    <div class="window"></div>
    <div class="door-handle"></div>
  </div>
</template>

<style scoped>
.car-body {
  width: 100%;
  height: 120px;
  border-radius: 50px 80px 10px 10px;
  position: relative;
  transition: background-color 0.5s; /* 색 바뀔 때 부드럽게! */
}

.window {
  position: absolute;
  top: 20px;
  left: 50px;
  width: 150px;
  height: 40px;
  background-color: #a5d8ff;
  border-radius: 30px 50px 0 0;
  border: 2px solid #fff;
}

.door-handle {
  position: absolute;
  top: 75px;
  right: 150px;
  width: 30px;
  height: 10px;
  background-color: #fff;
  border-radius: 5px;
}
</style>