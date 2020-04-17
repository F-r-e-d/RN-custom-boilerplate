import Player from "../Class/Player";

export default interface States {
    results?: any
    loader?: boolean
    counterTime?: string
    source?: any
    delay?: number
    min?: any
    resizeMode?: any
    modalVisible?: boolean
    location?: any
    errorMessage?: any
    value?: any
    data?: any
    query?: any
    inputValue?: any
    country?: any
    showSuggestions?: any
    userInput?: any
    filteredSuggestions?: any
    activeSuggestion?: any
    selected?: any
    player?: Player
    loading?: boolean
    listHeight? :any
    disable?: boolean
    playerScore? :any
    hasSignin?: any
    prevState?: any
    urlSource?: any
  }