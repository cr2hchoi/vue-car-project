<!--Tire.vue 역할 : 각 휠에 타이어 색을 입힐거임 -->
<!--자바스크립트 객체 안에서는 **카멜 케이스(borderColor)**로 써야 한다는 점이 포인트-->
<script setup>
const props = defineProps({
  color: String
});
</script>

<template>
  <div class="tire"
       :style="{
        borderColor : props.color || 'BLACK'
  }">
    <div class="spoke"></div>
<!--    부모가 안주면 기본값 블랙-->
    <slot></slot>
<!--    타이어 안에 휠 집어넣을 수 있다고는 하는데... -->

  </div>
</template>

<style scoped>

/* 1. 'spin'이라는 이름의 회전 동작 정의 */
@keyframes spin {
  from {
    transform: rotate(0deg);   /* 0도에서 시작 */
  }
  to {
    transform: rotate(360deg); /* 360도까지 회전 */
  }
}

.tire {
  /*타이어 정렬*/
  display: flex;
  justify-content: center;
  align-items: center;
  /* 핵심 1: 주변 상황이 어떻든 절대 줄어들지 마라! (0은 수축 거부) */
  flex-shrink: 0;
  width: 100px;  /* 휠보다 조금 더 크게 */
  height: 100px;
  /* 두툼한 타이어 고무 두께 */
  border: 20px solid ;
  border-radius: 50%;
  box-sizing: border-box;
  position: relative;
  animation: spin 1s linear infinite;
}


  .spoke {
    /*🌟 타이어 정중앙에 선 배치하기 🌟 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* 정확히 가운데 정렬 */

    width: 60px;      /* 타이어 구멍 크기에 맞게 조절 */
    height: 6px;      /* 선 두께 */
    background-color: white; /*  🌟 눈에 확 띄는 색상! 🌟 */

    border-radius: 4px;
    z-index: 10;      /* 다른 것보다 위에 보이게 설정 */
  }
.spoke::after {
  content: "";      /* 가상 요소를 만들 때 필수! */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;      /* 부모(.spoke)와 똑같은 길이 */
  height: 100%;     /* 부모(.spoke)와 똑같은 두께 */
  background-color: white;
  border-radius: 4px;

  /* 부모를 기준으로 90도 돌려서 십자(+) 모양 완성! */
  transform: rotate(90deg);
}

</style>