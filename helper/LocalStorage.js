import { AsyncStorage } from "react-native";

const LocalName={
    user:"@user",
    token:"@authToken",
    appList:"@applicattionsList",
    appListFirstList:"@applicattionsListFirstList"
}

function SetAppList(list) {
  try {
    let firstPageApps = [];
    list.slice([0], [10]).map((item, i) => {
      firstPageApps.push(item);
    });
    SetAppFirstPage(firstPageApps);
  } catch {}
  _Set(LocalName.appList, JSON.stringify(list));
}
function GetAppList() {
    try{
  return _Get(LocalName.appList);
    }catch(err){
        var temp=_Get(LocalName.appList);
        return [];
    }
}


function SetAppFirstPage(list) {
    _Set(LocalName.appListFirstList,JSON.stringify(list));
  }
  function GetAppFirstPage() {
      try{
    return _Get(LocalName.appListFirstList);
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


function SetToken(value, callback){
    return _Set(LocalName.token, value, callback);
}

function GetToken(){
    return _Get(LocalName.token);
}
function ClearToken(){
    //AsyncStorage.removeItem(LocalName.token);
    //debugger
    return _Set(LocalName.token,'null');
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

async function _Set(name, value, callback){
    //return window.localStorage.setItem(name, value);
    return await AsyncStorage.setItem(name, value, callback);
}

//#endregion


const LocalStorage={
    SetUser,
    GetUser,
    SetToken,
    GetToken,
    ClearToken,
    GetAppList,
    SetAppList,
    GetAppFirstPage,
    SetAppFirstPage
}
export default LocalStorage;