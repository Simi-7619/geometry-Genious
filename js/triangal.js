// get the height and base from input

function calculateTriangalArea(){

    // get width
    const triangalbase = document.getElementById('triangal-base');
    const baseValue = parseFloat(triangalbase.value);
    // console.log(baseValue)

    // get height
    const triangalHeight = document.getElementById('triangal-height');
    const heightValue = parseFloat(triangalHeight.value)
    // console.log(heightValue)

    // calculate area
    const area = .5 * baseValue * heightValue ;
    console.log('The area of the Triangal is: ', area)

    // display area calculation
    const tArea = document.getElementById('t-area');
     tArea.innerText = area;
     

}