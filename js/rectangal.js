function calculateRArea(){
    // get height
    const Rheight = document.getElementById('r-height')
    const height = parseFloat(Rheight.value)

    // get width
    const rwidth = document.getElementById('r-width');
    const width = parseFloat(rwidth.value);

    // calculate area
    const area = width * height

    // display area
    const RArea = document.getElementById('r-area');
    RArea.innerText = area;
}