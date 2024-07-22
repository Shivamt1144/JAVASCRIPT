function setUsernam(username){
    //complex DB calls
    this.username=username
}

function createUser(username,email,password){
    setUsernam.call(this,username)

    this.email=email
    this.password=password
}

const chai=new createUser("chai", "chai@fb.com",'123')

console.log(chai);//username does not displays: i.e setUsernam(username) gets no value so write userNam.call still no value write (this, username) 