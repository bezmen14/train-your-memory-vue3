<script setup lang="ts">
import useCardItems from '@/composable/useCardItems'
import { onMounted } from 'vue'

const { cardItems, generateRandomItems } = useCardItems

onMounted(() => {
  generateRandomItems()
})

</script>

<template>
  <div>
    <ul>
      <li v-for="item in cardItems" :key="item.title">
        <div class="card">
          <div class="card__face card__face--front">
            <img :src="`/images/question.png`" alt="question" width="100" />
          </div>
          <div class="card__face card__face--back">
            <img :src="`/images/${item.title}.png`" :alt="item.title" :style="item.style" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(5, 10em);
  gap: 15px;
  max-width: 712px;
  padding: 0;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  //transition: 0.3s;
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
