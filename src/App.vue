<script setup>
//import할 부품들
import CarBody from "./components/CarBody.vue";
import FrontWheel from "./components/FrontWheel.vue";
import RearWheel from "./components/RealWheel.vue";
</script>

<template>
  <div class="garage">
    <h1>🚗다래의 붕붕이</h1>
    <div class="car-container">
      <CarBody bodyColor="Yellow" />

      <div class="wheel-area">
        <FrontWheel />
        <RearWheel />
      </div>
    </div>
  </div>
</template>

<style>
//전체적인 배경, 정렬 스타일
.garage {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
}

.car-container {
  width: 500px;
  margin-top: 50px;
}
.wheel-area {
  display: flex;
  justify-content: space-around;
  margin-top: -40px; /* 몸체와 바퀴 합체! */
}
</style>