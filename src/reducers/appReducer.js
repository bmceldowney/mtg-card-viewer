import {
  FETCH_CARDS_ERROR,
  FETCH_CARDS_PENDING,
  FETCH_CARDS_SUCCESS,
  PAGE_LOADED,
  SEARCH_CRITERIA_ENTERED,
  CLEAR_CARDS,
  CHANGE_SORT
} from "../actions/actionTypes";

const initialState = {
  title: "Magic: the Gathering Card Viewer",
  loadingFromApi: false,
  lastPageFetched: 0,
  totalCardCount: 0,
  currentSearchCriteria: { name: "", artist: "", rarity: "", setName: "" },
  sortField: "name"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        loadingFromApi: false
      };
    case FETCH_CARDS_PENDING:
      return {
        ...state,
        loadingFromApi: true
      };
    case FETCH_CARDS_ERROR:
      return {
        ...state,
        loadingFromApi: false
      };
    case PAGE_LOADED:
      return {
        ...state,
        lastPageFetched: action.payload.pageNumber,
        totalCardCount: action.payload.totalCount
      };
    case SEARCH_CRITERIA_ENTERED:
      if (!action.payload.searchCriteria) return state;
      const currentSearchCriteria = state.currentSearchCriteria;
      const value = action.payload.searchCriteria.value;
      const fieldName = action.payload.searchCriteria.fieldName;

      currentSearchCriteria[fieldName] = value;

      return {
        ...state,
        currentSearchCriteria
      };
    case CLEAR_CARDS:
      return {
        ...state,
        totalCardCount: 0,
        lastPageFetched: 0
      };
    case CHANGE_SORT:
      return {
        ...state,
        sortField: action.payload
      };
    default:
      return state;
  }
}
