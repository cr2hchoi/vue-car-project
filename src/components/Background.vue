<template>
  <div class="scene">
    <div class="sky">
      <div class="cloud cloud1">☁️</div>
      <div class="cloud cloud2">☁️</div>
      <div class="cloud cloud3">☁️</div>
    </div>

    <div class="road"></div>
  </div>
</template>

<style scoped>
/* 1. 전체 배경 (하늘) 설정 */
.scene {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #87CEEB; /* 파란 하늘색 */
  z-index: -1; /* 자동차보다 뒤로 보내기 */
  overflow: hidden;
}

/* 2. 도로 및 무한 루프 중앙선 설정 */
.road {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 230px;
  background-color: #333; /* 아스팔트 색상 */

  /* 🎨 배경 이미지로 중앙선 그리기 (흰색 100px + 투명 100px = 총 200px 패턴) */
  background-image: linear-gradient(
      to right,
      white 0%, white 50%,
      transparent 50%, transparent 100%
  );

  /* 📏 패턴의 크기: 가로 200px(선+간격), 세로 20px(선 굵기) */
  background-size: 300px 20px;
  background-repeat: repeat-x; /* 가로로 무한 반복 */

  /* 📍 선의 위치: 가로 시작점 0, 세로 중앙(center) */
  background-position: 0 center;

  /* 🏃 애니메이션: 배경 위치(background-position)를 왼쪽으로 밀어내기 */
  animation: drive-bg 0.8s linear infinite;
}

/* 🔄 무한 루프 애니메이션 정의 */
@keyframes drive-bg {
  from {
    /* 시작 위치 */
    background-position: 0 center;
  }
  to {
    /* 🌟 중요: background-size와 똑같은 200px만큼 이동해야 끊김이 없음! 🌟 */
    background-position: 300px center;
  }
}

/* ☁️ 구름 애니메이션 (기존과 동일) */
.cloud {
  position: absolute;
  font-size: 150px;
  opacity: 0.8;
  animation: float 20s linear infinite;
}
.cloud1 { top: 10%; animation-duration: 20s; transform: scale(1.2) }
.cloud2 { top: 0%; animation-duration: 25s; opacity: 0.7; transform: scale(0.8) scaleX(-1); opacity: 0.8; }
.cloud3 {
  top: 20%;
  animation-duration: 30s;
  transform: scale(1.5) rotate(10deg);
  opacity: 0.9;/* 엄청 크고 살짝 기울어진 구름 */
  filter: blur(4px); /* 살짝 흐릿하게 해서 더 멀리 보이게 */
}

@keyframes float {
  from { left: -50%; }
  to { left: 120%; }
}
</style>