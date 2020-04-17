import Player from "../Class/Player";

export default interface CustomProps {
    player?: Player,
    allScores?: any,
    results?: Array<Player>
    imageName?: any
    style?: any
    resizeMode?: any
    source?: any
    onSelect?: any
    datas?: any
    propertyToSearch?: string
    selected?: any
    navigation?: any
    styleInputText?: any
    title?: string
    onPress?: any
    bgColor?: any
    textColor?: any
    placeholder?: any
    listHeight?: any
    disabled?: boolean
    getBestPlayerScore?: any
    bestPlayerScore?: any
    dispatch?: any
    thisPLayer?: boolean
    modalVisible?: any
    setPlayer?: any
    validSignin?: any
  }