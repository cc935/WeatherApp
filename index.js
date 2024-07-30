const input = document.querySelector("input")
const Hour = document.querySelector("#Hour")
const Display = document.querySelector("#City")
const tempDisplay = document.querySelector("#Temp")
const MinTemp = document.querySelector("#MinTemp")
const MaxTemp = document.querySelector("#max")
const window1 = document.querySelector(".app-container")
const submit = document.querySelector(".button")
const Description = document.querySelector(".Description")

submit.addEventListener("submit", (e) => {
    window1.style.display = "block"
    e.preventDefault()
    makeWeather()
})

async function makeWeather() {
    try {
        // Showing The Main Window
        window1.style.display = "block"

        // Set the Input Value in constant variable
        const CityName = input.value

        // making request
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=0f36f3e0a413b568a17df196cfcb47e7`)
        const data = await res.json()

        // get some Data
        const City = data.name
        const temp = ConvertToCel(data.main.temp)
        const MaxTemprature = ConvertToCel(data.main.temp_max)
        const MinTemprature = ConvertToCel(data.main.temp_min)
        tempDisplay.innerHTML = temp + "&deg;C"
        MaxTemp.innerHTML = MaxTemprature + "&deg;C"
        MinTemp.innerHTML = MinTemprature + "&deg;C"
        Display.innerHTML = City
        Description.innerHTML = data.weather[0].description
        showHour()
    }
    catch (error) {
        input.value = ""
        input.placeholder = "Enter A City"
    }
}

function ConvertToCel(unit) {
    return Math.floor((unit - 273.15).toFixed(2))
}

function showHour() {
    let TIme = new Date();
    const date = TIme.toLocaleDateString()
    Hour.innerHTML = date
}