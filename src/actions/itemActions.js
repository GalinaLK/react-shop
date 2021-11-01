import { FETCH_ITEMS } from './types';

export const fetchItems = () => dispatch => {

  fetch('https://jsonplaceholder.typicode.com/photos/')
  .then((response) => response.json())
  .then((json) => {
      const items = json.slice(0, 6);
      dispatch({
        type: FETCH_ITEMS,
        payload: items
      });
    }
   )
};
