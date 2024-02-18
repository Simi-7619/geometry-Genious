// reusable function
// get the value of the input using id name
function getinputValue(idName){
    const input = document.getElementById(idName);
    const value = parseFloat(input.value);
    return value;
}

// display the collection of the area
function displayArea(areaId, area){
    const display = document.getElementById(areaId);
    display.innerText = area;
}


// for the triangal area calculation
function calculateTriangalArea(){
    const base =getinputValue('triangal-base');
    const height= getinputValue('triangal-height');
    area = .5 * base * height;
    const calculation = displayArea('t-area', area)
}

// for the rectangal area calculation
function calculateRArea(){
    const height =getinputValue('r-height');
    console.log(height)
    const width =getinputValue('r-width');
    area = height * width ;
    const calculation = displayArea('r-area', area)
}

// for the parallelogram area calculation
function parallelogramCalculate(){
    const width = getinputValue('p-width');
    const height = getinputValue('p-height');
    area = width * height;
    const calculation = displayArea('p-area', area)
}