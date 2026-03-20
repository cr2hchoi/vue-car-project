import { createApp } from 'vue'
// 우리가 공들여 만든 App.vue(조립 공장)를 가져옵니다.
import App from './App.vue'

// App.vue를 실행해서 index.html에 있는 id="app"인 곳에 딱 붙여라! 라는 뜻입니다.
createApp(App).mount('#app')