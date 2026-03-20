<script setup>
import Tire from "./Tire.vue";
</script>


<template>
  <div class="front-wheel">

    <Tire color = "PURPLE"/>
    <!--    Tire 컬러 대입-->
  </div>
</template>

<style scoped>
.front-wheel{
  position: relative;
  width: 60px;
  height: 60px;
  border: 4px solid #888; /* 휠 프레임 두께와 색상 */
  border-radius: 50%;     /* 완벽한 원형 만들기 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>