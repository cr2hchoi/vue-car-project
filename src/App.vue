<script setup>
//import할 부품들
import CarBody from "./components/CarBody.vue";
import FrontWheel from "./components/FrontWheel.vue";
import RearWheel from "./components/RealWheel.vue";
</script>

<template>
  <div class="garage">
    <h1 class="title">🚗다래의 붕붕이</h1>
    <div class="car-container">
      <CarBody bodyColor="lavender" />
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

.title{
  margin-top:100px;
  display: flex;
flex-direction: column;
align-items: center}

.car-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 140px;
}
.wheel-area {
  width:400px;
  display: flex;
  justify-content: space-between;

  margin-top: -30px; /* 몸체와 바퀴 합체! */
}
</style>