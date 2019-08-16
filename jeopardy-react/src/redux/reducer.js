import { ADD_CARDS, TOGGLE_HIDDEN } from './types'

const initialState = {
  cards: [],
  popupCheck: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CARDS: {
      return {
        ...state,
        cards: [...state.cards, ...action.cards]
      }
      
    }
    case TOGGLE_HIDDEN: {
      return {
        ...state,
        popupCheck: action.popupCheck
      }
    }

    default:
      return state
  }
}