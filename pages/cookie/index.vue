<template>{{ Cookies.username }}</template>
<script setup>
const Cookies = useCookie("user"); // 获取 Cookie
// 设置 Cookie
Cookies.value = { username: "袁修飞", age: 33 };
</script>