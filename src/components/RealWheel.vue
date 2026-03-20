<script setup>
import Tire from "./Tire.vue";
</script>


<template>
  <div class="real-wheel">
    <span>Front Wheel</span>
    <Tire color = "PURPLE"/>
    <!--    Tire 컬러 대입-->
  </div>
</template>

<style scoped>
.real-wheel{
  width: 150px;
  height: 150px;
  border: 4px solid #333; /* 휠 프레임 두께와 색상 */
  border-radius: 50%;     /* 완벽한 원형 만들기 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>