export default function filterReducer(state, action) {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_LAYOUT":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_LAYOUT":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      const sortElem = document.getElementById("sort");
      const sortValue = sortElem[sortElem.selectedIndex].value;
      return {
        ...state,
        sort_value: sortValue,
      };

    case "SORT_PRODUCTS":
      const products = [...action.payload];
      let sortedProduct;

      if (state.sort_value == "random") {
        sortedProduct = products.sort(() => (Math.random() > 0.5 ? 1 : -1));
      } else if (state.sort_value == "ltoh") {
        sortedProduct = products.sort((a, b) => a.price - b.price);
      } else if (state.sort_value == "htol") {
        sortedProduct = products.sort((a, b) => b.price - a.price);
      } else {
        sortedProduct = products;
      }

      return {
        ...state,
        filter_products: sortedProduct,
      };

    default:
      return state;
  }
}
