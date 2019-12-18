import {
  fetchCardsPending,
  fetchCardsSuccess,
  fetchCardsError,
  pageLoaded
} from "./appActions";

// queue added last minute to cut down on duplicate requests
// I think this might be the culprit behind the search bug
// that breaks scroll loading
const requestQueue = [];

/**
 * The action used to fetch cards from the API
 * @param {Integer} pageNumber - the number of the page to be loaded
 */
function fetchCards(pageNumber) {
  return dispatch => {
    if (requestQueue.length) {
      return dispatch(fetchCardsInternal(requestQueue.pop()));
    } else {
      return dispatch(fetchCardsInternal(pageNumber));
    }
  };
}

function fetchCardsInternal(pageNumber = 1) {
  return (dispatch, getState) => {
    const {
      app: { currentSearchCriteria, sortField, loadingFromApi }
    } = getState();

    const pageSize = 20;
    const baseUrl = "https://api.magicthegathering.io";
    const path = "v1/cards";
    const url = new URL(path, baseUrl);

    url.searchParams.set("pageSize", pageSize);
    url.searchParams.set("page", pageNumber);
    url.searchParams.set("type", "Creature");
    url.searchParams.set("orderBy", sortField);

    Object.keys(currentSearchCriteria).forEach(key => {
      if (currentSearchCriteria[key]) {
        url.searchParams.set(key, currentSearchCriteria[key]);
      }
    });

    const cardUrl = url.href;

    if (loadingFromApi) {
      requestQueue.push(pageNumber);
      return;
    }

    let totalCount = 0;
    dispatch(fetchCardsPending());
    fetch(cardUrl)
      .then(res => {
        res.headers.forEach((value, key) => {
          if (key === "total-count") totalCount = value;
        });

        return res.json();
      })
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchCardsSuccess(res.cards));
        dispatch(
          pageLoaded({
            pageNumber,
            totalCount
          })
        );
        return res.products;
      })
      .catch(error => {
        console.log(error);
        dispatch(fetchCardsError(error));
      })
      .finally(() => {
        if (requestQueue.length) {
          const pageToFetch = requestQueue.pop();
          if (pageToFetch > pageNumber) {
            return dispatch(fetchCardsInternal(pageToFetch));
          }
        }
      });
  };
}

export default fetchCards;
