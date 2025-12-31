let student = {
    firstName: "dvir",
    lastName: "zicherman",
    id: "123456789",
    GPA: 95
}

let student2 = {
    firstName: "dvir",
    lastName: "zicherman",
    id: "123456789",
    GPA: 95
}
let student3 = {
    firstName: "dvir",
    lastName: "zicherman",
    id: "123456789",
    GPA: 95
}

student.course = "Fullstack"

let students = [student, student2,student3]
let students2 = [{name: "sdfs"},{name:"sdjjs"}]

for(let i = 0; i < students.length; i++){
    console.log(students[i].name)
}
// same as:
students.forEach(element => console.log(element.name));

// תרגיל
// צרו מערך של אוביקטים המכילים שם, גיל וכתובת
// המפתח של הכתובת יהיה אובייקט בפני עצמו
// שבו יהיה עיר ורחוב
// כתבו תוכנית המדפיסה את שמות האנשים הגרים בתל אביב

let arrayOfPeople = [
    {
        name: "dvir",
        age: 37,
        address:{
            city:"Rehovot",
            street:"natan alterman"
        }
    },
    {
        name: "akha",
        age: 74,
        address:{
            city:"Tel aviv",
            street:"natan alterman"
        }
    }
]

arrayOfPeople.forEach((person) => {
    if(person.address.city === "tel aviv"){
        console.log(person.name);
    }
})

//? Object Destructring
const {firstName} = student //מגדירים את החלק שאנחנו צריכים בתוך הסוגריים המסולסלים ובצד השני של השיוויון יהיה את האובייקט
console.log(firstName);

for(const key in student){ //a loop for running on the objects
    console.log("key: ", key);
    console.log("value: ", student[key]);
}

const objectExample = {name: "slkfn", age: 38, car:"Renault"}
const keys = Object.keys(objectExample) //output: ["name", "age", "car"]

const values = Object.values(objectExample) //output: [" slkfn", 38, "Renault"]

if(objectExample.hasOwnProperty("name")){
    console.log("Exists")
}else{
    console.log("Dosnt exists")
}

const translations = {
    hello: "שלום",
    welcome: "ברוך הבא"
}

const frozenTranslation = Object.freeze(translations) //הקפאה של משתנה ולהגן עליו מפני שינויים

//! Dom -- document Object Model
let allHeaders = document.getElementsByTagName("h1")
allHeaders[1].textContent = "test"
console.log();
