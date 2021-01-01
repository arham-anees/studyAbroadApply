import { AsyncStorage } from "react-native";

const LocalName={
    user:"user",
    token:"authToken"
}

function SetUser(value){
    _Set(LocalName.user, value);
}

function GetUser(){
    return _Get(LocalName.user);
}


function SetToken(value){
    _Set(LocalName.token, value);
}

function GetToken(){
    return _Get(LocalName.token);
}
function ClearToken(){
    _Set(LocalName.token,null);
    //console.log(_Get(LocalName.token));
}

//#region PRIVATE GET SET
function _Get(name) {
  try {
    return AsyncStorage.getItem(name);
  } catch (e) {
    console.log("Error LocalStorage: " + e);
    return null;
  }
}

async function _Set(name, value){
    return await AsyncStorage.setItem(name, value);
}

//#endregion


const LocalStorage={
    SetUser,
    GetUser,
    SetToken,
    GetToken,
    ClearToken
}
export default LocalStorage;