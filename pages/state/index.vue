<script setup lang="ts">
let counter = useState('counter', () => 0)
const increment = () => {
   counter.value++
   console.log('counter', counter.value);
}
const color = useColor()
</script>

<template>
   <div class="index">
      <h1>count:{{ counter }}</h1>
      <a-button type="primary" @click="increment">increment</a-button>
      <h1>color:{{ color }}</h1>
   </div>
</template>

<style scoped>
.index {
   display: flex;
   flex-direction: column;
}
</style>
