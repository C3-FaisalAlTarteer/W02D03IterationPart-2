console.log(arrowTitle)
    /* START CODE UNDER THIS LINE */


/*--------------------Pulse Check--------------------*/
//______________________________________________________
//Q1
const object = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
};
for (const viewKey in object) {
    console.log(viewKey);
}
//______________________________________________________
//Q2
const object2 = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
};
for (const viewValue in object) {
    console.log(object[viewValue]);
}





/*--------------------Practice--------------------*/
//______________________________________________________
//Q1

const keyValuePairs = function(object) {
    const result = [];
    for (const keyV in object) {
        result.push([keyV, object[keyV]]);
    }
    return result;

};

keyValuePairs({ name: "John", age: 24 }); // => [["name", "John"], ["age", 24]]
keyValuePairs({ firstName: "John", lastName: "Doe" }); // => [["firstName", "John"], ["lastName", "Doe"]]
keyValuePairs({
    name: "Mark",
    position: "Full-Stack Developer",
    salary: 600,
}); // => [["name", "Mark"], ["position", "Full-Stack Developer"], ["salary", 600]]
//______________________________________________________
//Q2
const absoluteNumbers = function(grades) {
    let result = [];
    for (const aNum in grades) {
        result = Math.abs(grades[aNum]);
    }
    return result;
};

absoluteNumbers({ science: 50, art: 60 }); // => {science: :50, art: 60}
absoluteNumbers({ science: -80, art: 75, english: 77 }); // => {science: :80, art: 75, english: 77}
//______________________________________________________
//Q3
const PassedOrFailed = function(studentGrades) {
    for (const POF in studentGrades) {
        if (studentGrades[POF] < 50) {
            return "f";
        }
    }
    return "pas"
};

const studentOne = {
    math: { grade: 70, total: 120 },
    english: { grade: 80, total: 100 },
    art: { grade: 90, total: 100 }
};

const studentTwo = {
    math: { grade: 59, total: 120 },
    english: { grade: 80, total: 100 },
    art: { grade: 90, total: 100 }
};

PassedOrFailed(studentOne); // =>  "The student have passed"
PassedOrFailed(studentTwo); // =>  "The student have failed"
//______________________________________________________
//Q4
const convertToArray = function(object) {
    let result = [];
    for (const CTA in object) {
        result.push(object[CTA])
    }
    return result;
};

convertToArray({ 0: "one", 1: "two", 2: "three" }); // => ["one", "two", "three"]
convertToArray({ 1: "two", 0: "one", 2: "three" }); // => ["one", "two", "three"]
convertToArray({ 2: "two", 1: "one", 0: "three" }); // => ["three", "one", "two"]
//______________________________________________________
//Q5
const poisonousCompounds = {
    daphnetoxin: true,
    mercury: true,
    cyanide: true,
};

const safeToConsume = function(object) {
    for (const STC in object) {
        if (poisonousCompounds[STC]) {
            return "Poisonous do no eat";
        }
    }
    return "Safe to consume";
};

safeToConsume({ h2o: "10.0g" }); // => "Safe to consume"
safeToConsume({ pyridoxine: "0.4mg", choline: "9.8mg", vitaminC: "8.7mg" }); // => "Safe to consume"
safeToConsume({
    genkwanin: "3.1mg",
    mezerein: "2.7mg",
    daphnetoxin: "7.3mg",
}); // => "Poisonous do no eat"
safeToConsume({ h2o: "5.2mg", glucose: "1.3mg", cyanide: "4.0mg" }); // => "Poisonous do no eat"
//______________________________________________________
//Q6
const toString = function(object) {
    let result = [];
    for (const TS in object) {
        result.push(object[TS]);
    }
    return result.join(", ")
};

toString({ name: "John", age: 24 }); // => "John, 24"
toString({ firstName: "John", lastName: "Doe" }); // => "John, Doe"
toString({ name: "Mark", position: "Full-Stack Developer", salary: 600 }); // => "Mark, Full-Stack Developer, 600"
//______________________________________________________
//Q7
// Make sure to loop over the bills object
const billsForJanuary = {
    waterBill: 25,
    electricityBill: 50,
    hospitalBill: 1000,
};

const billsForFebruary = {
    waterBill: 30,
    electricityBill: 45,
    insurance: 300,
};

const totalBill = function(billsObject) {
    let bill = 0;
    for (const TB in billsObject) {
        bill += billsObject[TB]
    }
    return bill;
};

totalBill(billsForJanuary); // => 1075
totalBill(billsForFebruary); // => 375
//______________________________________________________
//Q8
const users = {
    userOne: { username: "Jane", password: "123456" },
    userTwo: { username: "admin", password: "abc123" },
};

const login = function(username, password) {
    for (const Log in users) {
        if (users[Log].username === username &&
            users[Log].password === password) {
            return "Login Successful";
        };
    };
    return "Login Failed";
};

login("Jane", "123456"); // => "Login Successful"
login("Jane", "5321"); // => "Login Failed"
login("Mark", "123456"); // => "Login Failed"
login("admin", "abc123"); // => "Login Successful"
login("admin", "aaabc123"); // => "Login Failed"
//______________________________________________________
//Q9
const uniqueDogs = {
    max: { breed: "Labrador Retriever", color: "blond" },
    rex: { breed: "German Shepherd", color: "black and brown" },
    lucy: { breed: "Bulldog", color: "white" },
    lucifer: { breed: "Chihuahua", color: "brown" },
};

const createDog = function(name, dogBreed, furColor) {

    for (const cDOG in uniqueDogs) {
        if (cDOG === name ||
            cDOG['breed'] === dogBreed ||
            cDOG['color'] === furColor) {
            return "The dog isn't unique enough :(";
        };
    };
    return "Added the dog successfully";

};

createDog("luna", "Husky", "black and white"); // => "Added the dog successfully"
createDog("rex", "Golden Retriever", "blond"); // => "The dog isn't unique enough :("
//______________________________________________________
//Q10
const messageOne = {
    username: "John",
    message: "Hello",
    date: "01/01/2020",
    someKey: "someValue",
};

const messageTwo = {
    username: 10,
    message: "Hello",
    date: "01/01/2020",
};

const validateMessage = function(message) {
    let VM = {
        username: true,
        message: true,
        date: true
    }
    for (const key in VM) {
        if (typeof(message[key]) !== 'string') {
            return "invalid message";
        }
    }
    return message;


};
validateMessage(messageOne); // => {username: "John", message: "Hello", date:"01/01/2020"}
validateMessage(messageTwo); // => invalid message










/*--------------------Extra Practice--------------------*/
//______________________________________________________
//Q1
const compare = function(array, object) {
    for (let x = 0; x < array.lengt; x++) {
        const array1 = array[i]
        for (const key in object) {
            const object1 = object[key];
            if (object1 === array1) {
                return "True";
            }
        }
    }
    return "False"
};

compare(["one", "two", "three"], { 0: "one", 1: "two", 2: "three" }); // => true
compare(["one", "two", "four"], { 0: "one", 1: "two", 2: "three" }); // => false
compare(["one", "two"], { foo: "one", bar: "two", baz: "three" }); // => true
compare(["one", "two", "three"], { foo: "one", bar: "two" }); // => false