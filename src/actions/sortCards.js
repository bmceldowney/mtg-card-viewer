import { clearCards, changeSort } from "./appActions";
import fetchCards from "./fetchCards";

function sortCards(sortField) {
  return dispatch => {
    dispatch(clearCards());
    dispatch(changeSort(sortField));
    dispatch(fetchCards(1));
  };
}

export default sortCards;
