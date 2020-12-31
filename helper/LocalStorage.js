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

//#region PRIVATE GET SET
function _Get(name){
    return JSON.parse(localStorage.getItem(name));
}

function _Set(name, value){
    return localStorage.getItem(name, JSON.stringify(value));
}

//#endregion


const LocalStorage={
    SetUser,
    GetUser,
    SetToken,
    GetToken
}
export default LocalStorage;