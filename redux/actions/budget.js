import { ADD_BUDGET } from './types';

export const addFood = (budgetEntry) => ({
  type: ADD_BUDGET,
  data: budgetEntry,
});
