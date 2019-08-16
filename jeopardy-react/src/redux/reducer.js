import { ADD_CARDS } from './types'

const initialState = {
  cards: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CARDS: {
      return {
        cards: action.cards
      }
    }
    default:
      return state
  }
}