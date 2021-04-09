class AuthenticatedUser {
private _email:string;
private _expiresIn;
private _idToken:string;
private _localId:string;

constructor(email:string, expiresIn:string, idToken:String,localId:String) {
  this._email = email;
  this._expiresIn = expiresIn;

}

public get email() {
  return this._email;
}

public get expiresIn() {
  return this._expiresIn;
}

public get idToken() {
  return this._idToken;
}

public get localId() {
  return this._localId;
}


public toString () {
  return this._email;
}


}

export default AuthenticatedUser;


