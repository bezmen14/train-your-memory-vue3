<script setup lang="ts">
import CardList from '@/components/CardList.vue'
import useCardItems from "@/composable/useCardItems";
const { countCardsFound, shuffleCards, validateTwoCurrentCard } = useCardItems
</script>

<template>
  <div class="container">
    <h1>Тренируй память</h1>
    <p>Совпадений {{`${countCardsFound / 2} из 15`}}</p>
    <button @click="shuffleCards">Начать заново</button>
    <CardList @selected="validateTwoCurrentCard" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
