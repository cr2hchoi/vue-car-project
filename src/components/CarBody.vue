<script setup>
const props = defineProps({
  bodyColor:{
    type : String,
    default : '#333' //기본값 : 검정
  }
});
</script>

<template>
  <div class="car-body">
    <div class="car-roof" :style="{backgroundColor : props.bodyColor}">
      <div class="car-windows">
        <div class="window-left"></div>
        <div class="window-center"></div>
        <div class="window-right"></div>
      </div>


    </div>
    <div class="car-bottom" :style="{backgroundColor : props.bodyColor}">
      <div class="door-handle"></div>
    </div>

  </div>
</template>

<style scoped>
.car-body{

}
.car-roof {
  width: 500px;
  height: 120px;
  border-radius: 200px 50px 0px 0px; /*clip path 사용시 모서리 둥글게 적용 x*/
  /* 4개의 점을 찍어서 다각형을 만듦 (x y, x y, ...) */
  /* (왼쪽위, 오른쪽위, 오른쪽아래, 왼쪽아래) */
  clip-path: polygon(20% 0%, 90% 0%, 100% 100%, 0% 100%);
  /* 왼쪽 위 점을 30% 지점에 찍어서 사선을 만듦 */
  position: relative;
  transition: background-color 0.5s; /* 색 바뀔 때 부드럽게! */
  margin-left: 100px;
}

.car-windows{
  position:absolute;
  flex-direction: row;
  justify-content: space-around;
  display:flex;
  width: 100%;
  padding-top: 15px;
}

.window-left {

  width: 30%;
  height: 100px;
  background-color: #a5d8ff;
  border-radius: 30px 50px 0 0;
  border: 2px solid #fff;
  margin-left: -10px;

}

.window-center{


  width: 30%;
  height: 100px;
  background-color: #a5d8ff;
  border-radius: 30px 30px 0 0;
  border: 2px solid #fff;

}

.window-right{

  width: 30%;
  height: 100px;
  background-color: #a5d8ff;
  border-radius: 30px 30px 0 0;
  border: 2px solid #fff;
  margin-right: -10px;

}
.door-handle {
  position: absolute;
  top: 20px;
  right: 200px;
  width: 30px;
  height: 10px;
  background-color: #fff;
  border-radius: 5px;
}

.car-bottom{
  width: 100%;
  height: 120px;
  border-radius: 100px 0px 40px 20px;
  position:relative;
}
</style>