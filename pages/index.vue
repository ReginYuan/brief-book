<script setup lang="ts">
<<<<<<< HEAD
/**
 * Ant非组件模块处理之前我们按需引入蚂蚁框架组件时，
 * 官方提示非组件不能直接使用。我们需要手动引入
 */
import 'ant-design-vue/es/message/style/css'
import { message } from 'ant-design-vue'
// 获取挂在到 NuxtApp 的辅助函数
const { $myPlugin } = useNuxtApp()
const info = () => {
   message.info('袁秀飞是最帅的男人')
}
// const  { locale}  = use
</script>

<template>
   <div class="index">
      {{ $myPlugin('我最帅') }}
      <a-button type="primary" @click="info">消息弹框</a-button>

      <a-select v-model:value="locale">
         <a-select-option value="zh">zh</a-select-option>
         <a-select-option value="en">en</a-select-option>
      </a-select>
      <h1>{{ $t('welcome') }}</h1>
   </div>
=======
</script>

<template>
  <div class="index">
    <a-button type="primary">Add</a-button>
  </div>
>>>>>>> b7905cd4198c0c04313d05cd3478fdf9efda3016
</template>

<style scoped>
.index {
<<<<<<< HEAD
   display: flex;
   flex-direction: column;
=======
  display: flex;
  flex-direction: column;
>>>>>>> b7905cd4198c0c04313d05cd3478fdf9efda3016
}
</style>
