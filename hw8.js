//1
function createNameDiv(firstName, lastName) {
    const div = document.createElement("div") // יצירת אלמנט DIV

    const p1 = document.createElement("p") // יצירת פסקה ראשונה - שם פרטי
    p1.textContent = firstName
    p1.style.color = "red"
    p1.style.textDecoration = "underline"

    const p2 = document.createElement("p") // יצירת פסקה שנייה - שם משפחה
    p2.textContent = lastName
    p2.style.fontSize = "50px"
    p2.style.border = "1px solid black"

    div.appendChild(p1) // DIV -הוספת הפסקאות ל
    div.appendChild(p2)

    document.body.appendChild(div) // הוספת ה‑DIV ל‑BODY
}

// 2
const products = [  // מוצרים לדוגמה
    { name: "טלפון", description: "טלפון חדש עם מצלמה איכותית", price: 1200 },
    { name: "מחשב נייד", description: "מחשב חזק ללימודים ולעבודה", price: 3500 },
    { name: "אוזניות", description: "אוזניות אלחוטיות עם סאונד מעולה", price: 300 },
    { name: "טלוויזיה", description: "טלוויזיה 55 אינץ' חכמה", price: 2500 },
    { name: "עכבר", description: "עכבר גיימינג מהיר", price: 150 }
]

function showProductsByPrice(maxPrice) {    // פונקציה שמציגה מוצרים לפי מחיר
    const resultsDiv = document.getElementById("results")

    while (resultsDiv.firstChild) {     // ניקוי תוצאות קודמות
        resultsDiv.removeChild(resultsDiv.firstChild)
    }

    const filtered = products.filter(p => p.price <= maxPrice)   // סינון מוצרים

    filtered.forEach(product => {   // יצירת DIV לכל מוצר
        const productDiv = document.createElement("div")
        productDiv.style.border = "1px solid black"
        productDiv.style.margin = "10px"
        productDiv.style.padding = "10px"

        const nameP = document.createElement("p")   // שם
        nameP.textContent = product.name
        nameP.style.fontWeight = "bold"

        const descP = document.createElement("p")   // תיאור
        descP.textContent = product.description

        const priceP = document.createElement("p")  // מחיר
        priceP.textContent = "מחיר: " + product.price + " ₪"

        
        productDiv.appendChild(nameP)   // הוספת האלמנטים ל‑DIV
        productDiv.appendChild(descP)
        productDiv.appendChild(priceP)

        
        resultsDiv.appendChild(productDiv) // הוספת ה‑DIV לעמוד
    })
}

document.getElementById("priceInput").addEventListener("input", function () {   // האזנה לשינוי באינפוט
    const value = Number(this.value)
    if (!isNaN(value)) {
        showProductsByPrice(value)
    }
})

class drive{
    constructor(renterName, date, kmDrive){
        this.renterName = renterName
        this.date = date
        this.kmDrive = kmDrive
    }
}

class car{
    constructor(companyName, modelName){
        this.companyName = companyName
        this.modelName = modelName
        this.isCarAvailable = true
        this.totalKm = 0
        this.trips = []
    }
     
    calcTotalKm() {
        let sum = 0
        for (let trip of this.trips) {
            sum += trip.kmDriven
        }
        this.totalKm = sum
    }

    addTrip(drive) {
        this.trips.push(drive)
        this.totalKm += drive.kmDriven   // עדכון של הקילומטרים
        this.isAvailable = false          // הרכב מושכר
    }
}

class allCompanyCars{
    constructor(companyName){
        this.companyName
        this.cars = []
    }
    addNewCar(car){
        this.cars.push(car)
    }

    getCarWithMaxKm() {
        if (this.cars.length === 0) return null

        let maxCar = this.cars[0]
        for (let car of this.cars) {
            if (car.totalKm > maxCar.totalKm) {
                maxCar = car
            }
        }
        return maxCar
    }

    printAvailableCars() {
        console.log("Availible cars for rent :")
        this.cars.forEach(car => {
            if (car.isAvailable) {console.log(`${car.company} ${car.model}`)}})
    }

    addTripToCar(modelName, drive) {
        const car = this.cars.find(c => c.model === modelName)

        if (!car) {
            console.log("The car is not in the system ")
            return
        }
        car.addTrip(drive)
    }
}