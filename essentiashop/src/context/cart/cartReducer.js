export const initialState = {
  items: [],
  totalQty: 0,
  totalPrice: 0,
};

const sum = (items) => ({
  totalQty: items.reduce((a, i) => a + i.qty, 0),
  totalPrice: items.reduce((a, i) => a + i.price * i.qty, 0),
});

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { id, title, price, image } = action.payload;
      const exists = state.items.find((it) => it.id === id);
      let items;
      if (exists) {
        items = state.items.map((it) =>
          it.id === id ? { ...it, qty: it.qty + 1 } : it
        );
      } else {
        items = [...state.items, { id, title, price, image, qty: 1 }];
      }
      return { ...state, items, ...sum(items) };
    }
    case "REMOVE_ONE": {
      const id = action.payload;
      let items = state.items
        .map((it) => (it.id === id ? { ...it, qty: it.qty - 1 } : it))
        .filter((it) => it.qty > 0);
      return { ...state, items, ...sum(items) };
    }
    case "REMOVE_ITEM": {
      const id = action.payload;
      const items = state.items.filter((it) => it.id !== id);
      return { ...state, items, ...sum(items) };
    }
    case "CLEAR": {
      return { ...initialState };
    }
    case "SET": {
      const items = action.payload || [];
      return { ...state, items, ...sum(items) };
    }
    default:
      return state;
  }
}
