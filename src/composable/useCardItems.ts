import { reactive } from 'vue'
import type { Card } from '@/mocks/cards/type'
import { cards } from '@/mocks/cards/cards'

const cardItems = reactive<Card[]>(cards)
export default { cardItems }
