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
        outlineColor : props.color || 'BLACK'
  }">
<!--    부모가 안주면 기본값 블랙-->
    <slot></slot>
<!--    타이어 안에 휠 집어넣을 수 있다고는 하는데... -->

  </div>
</template>

<style scoped>
.tire {
  /*타이어 정렬*/
  display: flex;
  justify-content: center;
  align-items: center;
  /* 핵심 1: 주변 상황이 어떻든 절대 줄어들지 마라! (0은 수축 거부) */
  flex-shrink: 0;
  width: 80px;  /* 휠보다 조금 더 크게 */
  height: 80px;
  /* 두툼한 타이어 고무 두께 */
  border: 20px solid ;
  border-radius: 50%;
  box-sizing: border-box;


}
</style>