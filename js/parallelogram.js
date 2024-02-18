function parallelogramCalculate(){
    // get base
    const baseValue = document.getElementById('p-width');
    const base = parseFloat(baseValue.value);
    console.log(base)

    // get height
    const heightValue = document.getElementById('p-height');
    const height = parseFloat(heightValue.value);
    console.log(height)

    // get area
    const area = base * height;

    // show calculated area
    const pArea = document.getElementById('p-area');
    pArea.innerText = area;
}