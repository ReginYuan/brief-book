<script setup lang="ts">
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
// const { locale } = useState()
</script>

<template>
  <div class="index">
    {{ $myPlugin('我最帅') }}
    <a-button type="primary" @click="info">消息弹框</a-button>
  </div>
</template>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
}
</style>
