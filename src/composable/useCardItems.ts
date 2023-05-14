import { reactive } from 'vue'
import type { Card } from '@/mocks/cards/cards'
import { cards } from '@/mocks/cards/cards'

const cardItems = reactive<Card[]>([])

const generateRandomItems = (): void => {
  ;[...cards, ...cards]
    .sort(() => Math.random() - 0.5)
    .forEach((item, index) => {
      const currentItem: Card = { ...item, unique: btoa(String(index)) }
      cardItems.push(currentItem)
    })
}

export default { cardItems, generateRandomItems }
