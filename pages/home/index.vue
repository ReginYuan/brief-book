<template>
    <div class="home">
      <a-button type="primary" @click="info">消息弹框</a-button>
    </div>
</template>
 
<script setup lang="ts">
const { $message } = useNuxtApp()
const info = () => {
   $message.info('袁秀飞是最帅的男人')
}
</script>
 
<style lang="scss" scoped>
</style>