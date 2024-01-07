// cartActions.test.js
import { addItem, removeItem } from '../redux/cartActions'; 

describe('Cart Actions', () => {
  test('addItem action creator', () => {
    const item = { id: 1, price: 100 };
    const expectedAction = {
      type: 'ADD_ITEM',
      payload: item,
    };
    expect(addItem(item)).toEqual(expectedAction);
  });

  test('removeItem action creator', () => {
    const itemId = 1;
    const expectedAction = {
      type: 'REMOVE_ITEM',
      payload: itemId,
    };
    expect(removeItem(itemId)).toEqual(expectedAction);
  });
});
