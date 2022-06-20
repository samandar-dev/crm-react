export const reducer = (state, action) => {
  switch (action.type) {
    case "REMOV":
      return state.filter(itm => itm.guruhID !== action.paylod.id)
  }
}