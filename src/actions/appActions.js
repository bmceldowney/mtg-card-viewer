import {
  FETCH_CARDS_PENDING,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_ERROR,
  PAGE_LOADED,
  SEARCH_CRITERIA_ENTERED,
  CLEAR_CARDS,
  CHANGE_SORT
} from "./actionTypes";

export function fetchCardsPending() {
  return {
    type: FETCH_CARDS_PENDING
  };
}

export function fetchCardsSuccess(cards) {
  return {
    type: FETCH_CARDS_SUCCESS,
    payload: cards
  };
}

export function fetchCardsError(error) {
  return {
    type: FETCH_CARDS_ERROR,
    error: error
  };
}

export function pageLoaded({ pageNumber, totalCount }) {
  return {
    type: PAGE_LOADED,
    payload: { pageNumber, totalCount }
  };
}

export function searchCriteriaEntered(searchCriteria) {
  return {
    type: SEARCH_CRITERIA_ENTERED,
    payload: { searchCriteria }
  };
}

export function clearCards() {
  return {
    type: CLEAR_CARDS,
    payload: null
  };
}

export function changeSort(sortField) {
  return {
    type: CHANGE_SORT,
    payload: sortField
  };
}
