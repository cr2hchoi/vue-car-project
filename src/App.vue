<script setup>
//import할 부품들
import CarBody from "./components/CarBody.vue";
import FrontWheel from "./components/FrontWheel.vue";
import RearWheel from "./components/RearWheel.vue";

//ref 변수 사용
import { ref } from 'vue';

// 사용자가 선택한 색상을 저장할 반응형 변수 만듭니다. (기본값: lavender)
const selectedColor = ref('lavender');
</script>

<template>
  <div class="garage">
    <h1 class="title">🚗다래의 붕붕이</h1>

    <div class="color-picker">
      <label for="color">원하는 차 색상을 골라주세요: </label>
      <input type="color" id="color" v-model="selectedColor" />
      <span class="color-code">{{ selectedColor }}</span>
    </div>

    <div class="car-container">
      <CarBody :bodyColor="selectedColor" />
      <div class="wheel-area">
        <FrontWheel />
        <RearWheel />
      </div>
    </div>
  </div>
</template>


<style scoped>
/* CSS 파일 경로를 @import로 가져옵니다 //@import "./assets/main.css"; */

/* 1. 화면 전체 레이아웃 */
.garage {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
}

.title {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

/* 2. 자동차 조립 구역 */
.car-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 140px;
}

.wheel-area {
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-top: -30px; /* 몸체와 바퀴 합체! */
}

/* 3. 사용자 인터페이스 (UI) */
.color-picker {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: inline-block;
}

.color-code {
  margin-left: 10px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>