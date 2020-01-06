import * as types from '../actions/ActionTypes';

const initialState = {
  color: 'black',
  number: 0
}

export default function counter(state = initialState, action){
  console.log("action: ", action);
  switch(action.type){
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
      case types.DECREMENT:
        return {
          ...state,
          number: state.number - 1
        }
      case types.SET_COLOR:
        return {
          ...state,
          color: action.color
        }
    default:
      return state;
  }
}