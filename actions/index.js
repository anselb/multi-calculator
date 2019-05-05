export const SAVE_NUMBER = "SAVE_NUMBER"

export const saveNumber = (indexToChange, newNumber) => {
  return {
    type: SAVE_NUMBER,
    payload: { indexToChange, newNumber }
  }
}
