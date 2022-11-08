<script setup>
import { ref } from 'vue'
const ruoka = ref("ssss")

</script>

<template>
  <router-link to="/home">Ссылка </router-link>
  <h1>{{ ruoka }}</h1>
  

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
