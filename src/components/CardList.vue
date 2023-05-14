<script setup lang="ts">
import useCardItems from '@/composable/useCardItems'
import { onMounted, defineEmits } from 'vue'
import type { Card } from '@/mocks/cards'
const { cardItems, shuffleCards } = useCardItems
const emit = defineEmits(['selected'])

const selectedCart = (item: Card) => {
  if (item.isFound || item.isFlipped) return
  item.isFlipped = !item.isFlipped
  emit('selected', item)
}

onMounted(() => {
  shuffleCards()
})
</script>

<template>
  <ul>
    <li v-for="item in cardItems" :key="item.id">
      <div
        class="card"
        :class="{ 'is-flipped': item.isFlipped || item.isFound }"
        @click="selectedCart(item)"
      >
        <div class="card__face card__face--front">
          <img :src="`/images/question.png`" alt="question" />
        </div>
        <div class="card__face card__face--back">
          <img :src="`/images/${item.title}.png`" :alt="item.title" />
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(5, 10em);
  list-style-type: none;
  gap: 10px;
  padding-left: 0;
}

img {
  width: 80px;
  border-radius: 5px 5px 0 0;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  cursor: pointer;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card__face {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card__face--back {
  transform: rotateY(180deg);
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

</style>
