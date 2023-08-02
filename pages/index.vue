<script setup lang="ts">
/**
 * Ant非组件模块处理之前我们按需引入蚂蚁框架组件时，
 * 官方提示非组件不能直接使用。我们需要手动引入
 */
import 'ant-design-vue/es/message/style/css'
import { message } from 'ant-design-vue'
const messages = ref('我最帅')
const info = async () => {
   message.info('袁秀飞是最帅的男人')
   const { api } = await $fetch('/api/hello')
   messages.value = api
}



</script>

<template>
   <div class="index">
      <h1>{{ messages }}</h1>
      <a-button type="primary" @click="info">消息弹框</a-button>
   </div>
</template>

<style scoped>
.index {
   display: flex;
   flex-direction: column;
}
</style>
