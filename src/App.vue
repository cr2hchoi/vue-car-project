<script setup>
//import할 부품들
import Background from "@/components/Background.vue";
import CarBody from "./components/CarBody.vue";
import Wheel from "./components/Wheel.vue";

//ref 변수 사용
import { ref } from 'vue';

// 사용자가 선택한 색상을 저장할 반응형 변수 만듭니다. (기본값: lavender)
const selectedColor = ref('lavender');
//타이어 바퀴 선택할 수 있는 반응형 변수
const selectedTireColor = ref('BLACK');
</script>

<template>
  <div class="garage">
    <Background/>
    <h1 class="title">🚗다래의 붕붕이</h1>

    <section class="controls">
      <p> 나만의 차를 커스텀 해요 ! </p>
      <div class="option">
        <label>🎨 차 본체 색상 </label>
        <input type="color" v-model="selectedColor" />
      </div>

      <div class="option">
        <label>🛞 바퀴 색상</label>
        <input type="color" v-model="selectedTireColor" />
      </div>
    </section>

    <div class="car-container">
      <CarBody :bodyColor="selectedColor" />
      <div class="wheel-area">
        <Wheel location="front" :color="selectedTireColor" />
        <Wheel location="rear" :color="selectedTireColor" />
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

.controls {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 50px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  backdrop-filter: blur(5px); /* 배경 살짝 흐리게 해서 고급스럽게 */
}

.option {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
}
</style>