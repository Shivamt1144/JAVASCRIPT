class user{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username:${this.username}`);
    }
    //static keyword blocks the access
    static createID(){  
        return `123`
    }
}

const shivam= new user("Shivam")
console.log(shivam.logMe());
// console.log(shivam.createID()); //throws error


class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iPhone= new Teacher("iphone","i@phone.com")
iPhone.logMe()