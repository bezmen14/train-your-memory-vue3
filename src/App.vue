<script setup lang="ts">
import CardList from '@/components/CardList.vue'
import useCardItems from '@/composable/useCardItems'
import { cards } from '@/mocks/cards/cards'

const { countCardsFound, shuffleCards, validateTwoCurrentCard, cardItemList } = useCardItems
</script>

<template>
  <div class="container">
    <h1>Тренируй память</h1>
    <h3 v-if="countCardsFound === cardItemList.length">Поздравляем! Вы нашли все совпадения</h3>
    <h3>Совпадений {{ `${countCardsFound / 2} из ${cards.length}` }}</h3>
    <button v-text="'Начать заново'" @click="shuffleCards" />
    <CardList @selected="validateTwoCurrentCard" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  font-family: 'Open Sans', sans-serif;
  appearance: none;
  cursor: pointer;
  border-radius: 5px;
  background: white;
  color: black;
  padding: 8px 16px;
  font-size: 16px;
  border-color: black;
}

button:hover {
  background: whitesmoke;
}

h1 {
  font-family: 'Open Sans', sans-serif;
  font-size: 40px;
  font-weight: normal;
  line-height: 1;
  padding: 10px 0;
  margin: 0;
}

h3 {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: normal;
  padding: 10px 0;
  margin-bottom: 10px;
}
</style>
