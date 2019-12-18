import { clearCards, searchCriteriaEntered } from "./appActions";
import fetchCards from "./fetchCards";

let timeout = null;

function searchCards(criteria) {
  return dispatch => {
    dispatch(searchCriteriaEntered(criteria));
    clearTimeout(timeout);
    timeout = null;

    timeout = setTimeout(() => {
      dispatch(clearCards());
      dispatch(fetchCards(1));
    }, 1000);
  };
}

export default searchCards;
