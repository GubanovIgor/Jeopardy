import { ADD_CARDS } from './types'

const addCardsAC = (cards) => {
  return {
    type: ADD_CARDS,
    cards: cards
  }
}

export { addCardsAC };
