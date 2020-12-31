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
    _Set(LocalName.token,null)
}

//#region PRIVATE GET SET
function _Get(name){
    return JSON.parse(AsyncStorage.getItem(name));
}

function _Set(name, value){
    return AsyncStorage.getItem(name, JSON.stringify(value));
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