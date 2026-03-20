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
        color: props.color || 'BLACK',
        borderColor : props.color || 'BLACK'
  }">
<!--    부모가 안주면 기본값 블랙-->
    {{ props.color || 'BLACK' }} Tire

  </div>
</template>

<style scoped>
.tire {
  font-weight: bold;
  font-size: 14px;
  padding: 10px;
  /*바깥 테두리(타이어 설정)*/
  border: 3px solid;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s; /* 색이 바뀔 때 부드럽게 변함 */
}
</style>