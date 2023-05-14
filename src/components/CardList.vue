<script setup lang="ts">
import useCardItems from '@/composable/useCardItems'
import { onMounted } from 'vue'

const { cardItems, generateRandomItems } = useCardItems

onMounted(() => {
  generateRandomItems()
})
</script>

<template>
  <ul>
    <li v-for="item in cardItems" :key="item.title">
      <div class="card">
        <div class="card__face card__face--front">
          <img :src="`/images/question.png`" alt="question" width="80" />
        </div>
        <div class="card__face card__face--back">
          <img :src="`/images/${item.title}.png`" :alt="item.title" :style="item.style" />
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

.card img {
  border-radius: 5px 5px 0 0;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
