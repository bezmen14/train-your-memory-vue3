import { reactive, ref, watch } from 'vue'
import { cards } from '@/mocks/cards/cards'
import { v4 as uuidv4 } from 'uuid'
import type { Card } from '@/mocks/cards/types'

const cardItemList = reactive<Card[]>([])
const validationCards = reactive<Card[]>([])
const countCardsFound = ref(0)

watch(
  () => cardItemList,
  (newValue) => {
    countCardsFound.value = newValue.filter((card) => card.isFound).length
  },
  { deep: true }
)

const shuffleCards = () => {
  cardItemList.length = 0
  ;[...cards, ...cards]
    .sort(() => Math.random() - 0.5)
    .forEach((card) => {
      const currentItem: Card = { ...card, id: uuidv4() }
      cardItemList.push(currentItem)
    })

  setTimeout(() => {
    cardItemList.forEach((card) => (card.isFlipped = false))
  }, 3500)
}

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
  cardItemList,
  countCardsFound,
  shuffleCards,
  validateTwoCurrentCard
}
