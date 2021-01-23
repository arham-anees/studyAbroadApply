import { AsyncStorage } from "react-native";

const LocalName={
    user:"@user",
    token:"@authToken",
    appList:"@applicattionsList"
}

function SetAppList(list) {
  _Set(LocalName.appList,JSON.stringify(list));
}
function GetAppList() {
    try{
  return _Get(LocalName.appList);
    }catch(err){
        var temp=_Get(LocalName.appList);
        return [];
    }
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
    AsyncStorage.removeItem(LocalName.token);
    //debugger
    //_Set(LocalName.token,null);
    //console.log(_Get(LocalName.token));
}

//#region PRIVATE GET SET
async function _Get(name) {
  try {
      //return window.localStorage.getItem(name);
     return await AsyncStorage.getItem(name);
  } catch (e) {
    console.log("Error LocalStorage: " + e);
    return null;
  }
}

async function _Set(name, value){
    //return window.localStorage.setItem(name, value);
    return await AsyncStorage.setItem(name, value);
}

//#endregion


const LocalStorage={
    SetUser,
    GetUser,
    SetToken,
    GetToken,
    ClearToken,
    GetAppList,
    SetAppList
}
export default LocalStorage;