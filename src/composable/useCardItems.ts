import { reactive, ref, watch } from 'vue'
import type { Card } from '@/mocks/cards/cards'
import { cards } from '@/mocks/cards/cards'
import { v4 as uuidv4 } from 'uuid'

const cardItems = reactive<Card[]>([])

const validationCards = reactive<Card[]>([])
let currentCards = reactive(<Card>{})
const countFounded = ref(0)

watch(
  () => cardItems,
  (newValue) => {
    countFounded.value = newValue.filter((card) => card.isFound).length
  },
  { deep: true }
)

const shuffleCards = () => {
  cardItems.length = 0
  ;[...cards, ...cards]
    .sort(() => Math.random() - 0.5)
    .forEach((item) => {
      const currentItem: Card = { ...item, id: uuidv4(), isFlipped: true }
      cardItems.push(currentItem)
    })

  setTimeout(() => {
    cardItems.forEach((el) => (el.isFlipped = false))
  }, 3500)
}

const setCurrentCards = (items: Card): Card => (currentCards = items)

const validateTwoCurrentCard = (item: Card): void => {
  validationCards.push(item)

  if (validationCards.length === 2) {
    if (validationCards[0].title === validationCards[1].title) {
      validationCards.forEach((item) => (item.isFound = true))
      validationCards.length = 0
    } else {
      setTimeout(() => {
        validationCards.forEach((item) => (item.isFlipped = false))
        validationCards.length = 0
      }, 700)
    }
  }
}

export default {
  cardItems,
  countFounded,
  shuffleCards,
  validationCards,
  currentCards,
  setCurrentCards,
  validateTwoCurrentCard
}
