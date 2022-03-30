const defaultState = [];
const CHECK_STATUS = 'bookstore-cms/categories/CHECK';

export function checkStatus() {
  return { type: CHECK_STATUS };
}

export default function categoriesReducer(
  state = defaultState,
  action,
) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}
