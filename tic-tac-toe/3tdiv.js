function initializeTile(id) {
    const tile = document.getElementById(id);
    const originalInnerHTML = tile.innerHTML;
    tile.innerHTML = '_';
    console.log(tile.innerHTML);
    console.log(originalInnerHTML);
}

document.addEventListener(
    "DOMContentLoaded",
    function() {
        initializeTile('1a');
        initializeTile('1b');
        initializeTile('1c');
        initializeTile('2a');
        initializeTile('2b');
        initializeTile('2c');
        initializeTile('3a');
        initializeTile('3b');
        initializeTile('3c');
    }
);