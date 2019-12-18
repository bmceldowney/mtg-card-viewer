import { FETCH_CARDS_SUCCESS, CLEAR_CARDS } from "../actions/actionTypes";

function buildInitialState(placeholderCount) {
  const state = {
    allIds: [],
    byIds: {}
  };

  for (let id = 0; id < placeholderCount; id++) {
    state.allIds.push(id);
    state.byIds[id] = { id, imageUrl: "placeholder" };
  }
  console.log("built initial state");
  return state;
}

const initialState = buildInitialState(20);

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARDS_SUCCESS:
      const newState = { ...state };

      // clear placeholders
      if (newState.byIds[0] && newState.byIds[0].imageUrl === "placeholder") {
        newState.byIds = {};
        newState.allIds = [];
      }

      action.payload.forEach(card => {
        const { name, originalType, setName, id, artist, imageUrl } = card;

        if (state.allIds.indexOf(id) === -1) {
          newState.byIds[id] = {
            name,
            originalType,
            setName,
            id,
            artist,
            imageUrl
          };
          newState.allIds.push(id);
        }
      }, {});

      return newState;
    case CLEAR_CARDS:
      return buildInitialState(20);
    default:
      return state;
  }
}
