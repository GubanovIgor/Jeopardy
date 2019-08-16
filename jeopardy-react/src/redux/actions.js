import { ADD_CARDS, TOGGLE_HIDDEN } from './types'

const addCardsAC = (cards) => {
  return {
    type: ADD_CARDS,
    cards: cards,
  }
}

const toggleHiddenAC = (status) => {
  return {
    type: TOGGLE_HIDDEN,
    popupCheck: status,
  }
}

export { addCardsAC, toggleHiddenAC };
