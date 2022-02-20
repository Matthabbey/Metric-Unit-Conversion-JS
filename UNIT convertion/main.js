
let calMeter = 3.281;
let calVolume = 4.546;
let calMass = 2.205;

// document.getElementById("conversion").textContext = num
//Calculation for Length
let conversion = document.getElementById("meter")

function meter(){
    var inputValue = document.getElementById("inputNum").value
    let mc = inputValue / calMeter
    var meterCal = mc.toFixed(3)
    conversion.textContent = meterCal + " meters"

}

let conFeet = document.getElementById("feet")

function feet(){
    var inputValue = document.getElementById("inputNum").value
    let fc = inputValue * calMeter
    var feetCal = fc.toFixed(3)
    conFeet.textContent = feetCal + " feet"
}

// Calculation for Volumes
let conLiter = document.getElementById("liter")

function liter(){
    let inputValue = document.getElementById("inputNum").value
    let lc = inputValue / calVolume
    let literCal = lc.toFixed(3)
    conLiter.textContent = literCal + " liter"
}

let conGallon = document.getElementById("gallon")

function gallon(){
    var inputValue = document.getElementById("inputNum").value
    var gc = inputValue * calVolume
    var gallonCal = gc.toFixed(3)
    conGallon.textContent = gallonCal + " gallon"
}

//Calculation for Mass
let conKilometer = document.getElementById("kilo")

function kilo(){
    var inputValue = document.getElementById("inputNum").value
    var kc = inputValue / calMass
    var kiloCal = kc.toFixed(3)
    conKilometer.textContent = kiloCal + " kilo"
}

let conPound = document.getElementById("pound")

function pound(){
    var inputValue = document.getElementById("inputNum").value
    var pc = inputValue * calMass
    let poundCal = pc.toFixed(3)
    conPound.textContent = poundCal + " pound"
}
