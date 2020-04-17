import { getAllScoresFromFirestore, getUserLastScoreFromFirestore } from "../Providers/functions";
  
  function loadingResults() {
    return { type: "LOADING_RESULTS" }
  }

export function getAllScores () {
    return (dispatch) => {

       return getAllScoresFromFirestore()
        .then((json) => {
          // console.log(json);
          
            return dispatch({ type: 'GET_ALL_SCORES', json })
            
        })
        .catch((error=>console.log(error))
        )
    }   
   }
