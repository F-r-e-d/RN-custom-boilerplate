
import { combineReducers } from 'redux';


const loadScores = (state = { results: [] }, action) => {

    switch (action.type) {
        case 'GET_ALL_SCORES':          
          return  Object.assign({}, state, {
                  results: action.json
              })
            
        default:
            return state;
    }
}


const bestPlayerScoreReducer = (state = {bestPlayerScore: {}}, action) => {
  // console.log(action);

  switch (action.type) {
    // case "GET_BEST_PLAYER_SCORE":
    //   return state    
    

    case "SET_BEST_PLAYER_SCORE":
      // console.log(action);
      
      return  Object.assign({}, state, {
        bestPlayerScore: action.value
    })

    default:
      return state
  }
}

const allScores = combineReducers({
  results: loadScores,
  bestPlayerScore: bestPlayerScoreReducer
})

export default allScores;