import { ADD_BUDGET } from '../actions/types';

const initialState = {
  budgetList: [],
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUDGET:
      return {
        ...state,
        budgetList: state.budgetList.concat({
          budget: action.data,
        }),
      };
    default:
      return state;
  }
};

export default budgetReducer;
