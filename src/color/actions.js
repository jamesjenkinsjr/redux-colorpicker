import * as types from './types';

//actions
export const updateColor = (hex) => ({
    type: types.COLORPICK,
    payload: {
      value: hex
    }
  });