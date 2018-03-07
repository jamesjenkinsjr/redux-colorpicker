import * as types from './types'

//reducer
const initialState = {
    hex: "#000000"
  };
const colorChange = (state = initialState, action) => {
    switch (action.type) {
      case types.COLORPICK:
        return {
          ...state,
          hex: action.payload.value
        }
        default:
        return { 
          ...state, 
          hex: state.hex
        }
  
    }
  };
  export default colorChange;