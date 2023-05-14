<script setup lang="ts">
import CardList from '@/components/CardList.vue'
</script>

<template>
  <div class="container">
    <h1>Тренируй память</h1>
    <CardList />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
