//UC1
class AddressBook{
    firstName;
    lastName;
    address;
    city;
    state;
    pin;
    phone;
    mailId;
    
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.pin = params[5];
        this.phone = params[6];
        this.mailId = params[7];

    }
    get getFirstName(){return this.firstName;}
    set setFirstName(firstName){this.firstName = firstName;}

    get lastName(){return this.lastName;}
    set lastName(lastName){this.lastName = lastName;}

    get address(){return this.address;}
    set address(address){this.address = address;}

    get city(){return this.city;}
    set city(city){this.city = city;}

    get state(){return this.state;}
    set state(state){this.state = state;}

    get pin(){return this.pin;}
    set pin(pin){this.pin = pin;}

    get phone(){return this.phone;}
    set phone(phone){this.phone = phone;}

    get mailId(){return this.mailId;}
    set mailId(mailId){this.mailId = mailId;}

}
let ab = new AddressBook();

let firstName = document.querySelector("#fName");
let lastName = document.querySelector("#lName");
let address = document.querySelector("#addr");
let city = document.querySelector("#cty");
let state = document.querySelector("#state");
let pin = document.querySelector("#pn");
let phone = document.querySelector("#phn");
let mailId = document.querySelector("#mail");
let error_fName = document.querySelector(".error-fName");
let error_lName = document.querySelector(".error-lName");


function addContact(){
    let ab = new AddressBook(firstName,
        lastName,
        address,
        city,
        state,
        pin,
        phone,
        mailId);
    console.log("first Nmae :"+ab.getFirstName.value);
}
