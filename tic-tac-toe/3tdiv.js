function initializeTile() {
    const tile = document.getElementById('1a');
    const originalInnerHTML = tile.innerHTML;
    tile.innerHTML = '_';
    console.log(tile.innerHTML);
    console.log(originalInnerHTML);
}

document.addEventListener(
    "DOMContentLoaded",
    function() {
        initializeTile();
    }
);