import {
  SAVE_NUMBER
} from '../actions'

const calcReducer = (state = [0, 0, 0, 0], action) => {
  switch(action.type) {
    case SAVE_NUMBER:
      const { indexToChange, newNumber } = action.payload

      const updatedState = state.map((calcValue, index) => {
        if (indexToChange === index) {
          return newNumber
        } else {
          return calcValue
        }
      })

      return updatedState
    default:
      return state
  }
}

export default calcReducer
