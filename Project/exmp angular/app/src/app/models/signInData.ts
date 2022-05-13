export class SignInData{
    private email: String;
    private password: String;

    constructor(email:String, password:String){
        this.email = email;
        this.password = password;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }
}