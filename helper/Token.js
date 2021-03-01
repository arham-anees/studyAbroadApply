let AuthToken=null;
function GetAuthToken(){
    return AuthToken;
}
function SetAuthToken(token){
    AuthToken=token;
}

export default AuthToken={
    GetAuthToken,
    SetAuthToken
}